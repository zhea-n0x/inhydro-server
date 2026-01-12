import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enums/roles.enum';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.usersService.register(dto);
  }
}
