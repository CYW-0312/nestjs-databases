import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { ApiModule } from './api/api.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ทำให้สามารถใช้ ConfigService ได้ทั่วทั้งแอป
      envFilePath: '.env', // ค่า default อยู่แล้ว ไม่ต้องใส่ก็ได้
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string(),
      }),
    }),
    PrismaModule,
    ApiModule,
  ],
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService],
})
export class AppModule { }
