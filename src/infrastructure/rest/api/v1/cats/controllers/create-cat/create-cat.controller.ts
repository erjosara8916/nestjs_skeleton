import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateCatDTO } from './create-cat.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('v1/cats')
@Controller('v1/cats')
export class CreateCatController {
	@Post()
	async create(
		@Body(new ValidationPipe()) createCatDTO: CreateCatDTO,
	): Promise<string> {
		return 'This action adds a new cat';
	}
}
