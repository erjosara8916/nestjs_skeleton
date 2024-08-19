import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { logger } from './common/middlewares/logger.middleware';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { setupSwagger } from './core/swagger/swagger.setup';

async function bootstrap() {
	const PORT = 8080;
	const app = await NestFactory.create(AppModule);
	app.use(logger);
	app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());

	setupSwagger(app);
	await app.listen(PORT, () => {
		console.log('Application running on port ' + PORT);
	});
}
bootstrap();
