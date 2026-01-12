import { Module } from '@nestjs/common';
import { ActuatorsController } from './actuator.controller';
import { ActuatorsService } from './actuator.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ActuatorsController],
  providers: [ActuatorsService, PrismaService],
  exports: [ActuatorsService],
})
export class ActuatorsModule {}
