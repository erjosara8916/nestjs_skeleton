import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';
import { Environments } from './environments.enum';

export class AppConfig {
  @IsEnum(Environments)
  NODE_ENV: Environments;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;

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
