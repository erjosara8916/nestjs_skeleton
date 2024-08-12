import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ENVIRONMENT } from 'src/config/constants/env.constants';
import { Cat } from './entities/cat.entity';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get(ENVIRONMENT.DATABASE.HOST),
        port: +configService.get(ENVIRONMENT.DATABASE.PORT),
        username: configService.get(ENVIRONMENT.DATABASE.USERNAME),
        password: configService.get(ENVIRONMENT.DATABASE.PASSWORD),
        database: configService.get(ENVIRONMENT.DATABASE.NAME),
        entities: [Cat],
        synchronize: false,
      })
    }),
  ]
})
export class DatabaseModule {}
