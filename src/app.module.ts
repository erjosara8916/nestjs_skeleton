import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { CatsModule } from './modules/cats/cats.module';
import { HttpExceptionFilter } from './common/filters/httpException.filter';
import { RolesGuard } from './common/guards/roles.guard';
import { validate } from "./config/env.validation";
import { DatabaseModule } from './core/database/database.module';


@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [
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
