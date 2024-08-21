import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

import { CreateCatDto } from 'src/application/use-cases/cats/create-cat/create-cat.dto';

export class RestCreateCatDTO extends CreateCatDto {
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
