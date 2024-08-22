import { IsEnum, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { Environments } from './environments.enum';

export class AppConfig {
	@IsEnum(Environments)
	NODE_ENV: Environments;

	@IsNumber()
	@Min(0)
	@Max(65535)
	@IsNotEmpty()
	PORT: number;
}
