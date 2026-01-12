import { Controller, Get, Post, Body } from '@nestjs/common';
import { ActuatorsService } from './actuator.service';
import { RegisterActuatorDto } from './dto/register-actuator.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enums/roles.enum';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('actuators')
export class ActuatorsController {
  constructor(private actuatorService: ActuatorsService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  @Post('register')
  register(@Body() dto: RegisterActuatorDto) {
    return this.actuatorService.registerDevice(dto);
  }
}
