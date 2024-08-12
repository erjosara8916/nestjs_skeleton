import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './common/filters/httpException.filter';
import { RolesGuard } from './common/guards/roles.guard';
import { validate } from "./config/env.validation";
import { Cat } from './cats/cat.entity';
import { ENVIRONMENT } from './config/constants/env.constants';


@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate
    }),
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
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes('cats');
  }
}
