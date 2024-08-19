import { IsNumber, IsString } from 'class-validator';

export class Environment {
	@IsString()
	DATABASE_TYPE: string;

	@IsString()
	DATABASE_HOST: string;

	@IsNumber()
	DATABASE_PORT: number;

	@IsString()
	DATABASE_NAME: string;

	@IsString()
	DATABASE_USER: string;

	@IsString()
	DATABASE_PASSWORD: string;
}
