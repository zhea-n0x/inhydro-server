import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ActuatorsModule } from './actuators/actuator.module';

@Module({
  imports: [UsersModule, ActuatorsModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
