import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DbConfig {
	@IsString()
	DATABASE_TYPE: string;

	@IsString()
	@IsNotEmpty()
	DATABASE_HOST: string;

	@IsNumber()
	@IsNotEmpty()
	DATABASE_PORT: number;

	@IsString()
	@IsNotEmpty()
	DATABASE_NAME: string;

	@IsString()
	@IsNotEmpty()
	DATABASE_USER: string;

	@IsString()
	@IsNotEmpty()
	DATABASE_PASSWORD: string;
}
