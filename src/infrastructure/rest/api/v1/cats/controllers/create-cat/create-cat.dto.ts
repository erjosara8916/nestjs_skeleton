import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateCatDTO {
	@ApiProperty({
		description: 'The name of a cat',
	})
	@IsString()
	@IsNotEmpty()
	name: string;

	@ApiProperty({
		description: 'The age of a cat',
		default: 0,
	})
	@IsNumber()
	age: number;

	@ApiProperty({
		description: 'The breed of a cat',
	})
	@IsString()
	@IsNotEmpty()
	breed: string;
}
