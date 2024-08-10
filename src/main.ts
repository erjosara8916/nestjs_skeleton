import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { logger } from './common/middleware/logger.middleware';
import { LoggingInterceptor } from "./common/interceptors/logging.interceptor";
import { TimeoutInterceptor } from "./common/interceptors/timeout.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger)
  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());
  await app.listen(process.env.PORT);
}
bootstrap();
