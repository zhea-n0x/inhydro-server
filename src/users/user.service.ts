import { ConflictException, Injectable, OnModuleInit } from '@nestjs/common';
import { User } from './user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    const exist = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (exist) {
      throw new ConflictException('Email already registered!');
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
        password: hashed,
        role: dto.role,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    };
  }

  // src/users/users.service.ts
  async findSafeById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  }
}
