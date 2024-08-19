import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { validate } from '../config/env.validation';
import { ENVIRONMENT } from '../config/env.constants';
import { Cat } from './entities/cat.entity';

@Module({
	imports: [
		ConfigModule.forRoot({
			validate,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				type: 'mysql',
				host: configService.get(ENVIRONMENT.HOST),
				port: +configService.get(ENVIRONMENT.PORT),
				username: configService.get(ENVIRONMENT.USERNAME),
				password: configService.get(ENVIRONMENT.PASSWORD),
				database: configService.get(ENVIRONMENT.NAME),
				entities: [Cat],
				synchronize: false,
			}),
		}),
	],
	controllers: [],
	providers: [],
})
export class TypeormModule {}
