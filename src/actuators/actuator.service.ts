import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterActuatorDto } from './dto/register-actuator.dto';

@Injectable()
export class ActuatorsService {
  constructor(private prisma: PrismaService) {}

  async registerDevice(dto: RegisterActuatorDto) {
    const actuator = await this.prisma.actuator.create({
      data: {
        name: dto.name,
        key: dto.key,
        state: dto.state,
        type: dto.type,
      },
    });

    return {
      message: `${actuator.name} successfully registered`,
      data: {
        id: actuator.id,
        name: actuator.name,
        state: actuator.state,
        type: actuator.type,
      },
    };
  }
}
