import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { RestCreateCatDTO } from './create-cat.dto';
import { ApiTags } from '@nestjs/swagger';
import { AsyncController } from 'src/infrastructure/rest/base/abstract/async-controller.abstract';
import { CreateCatUseCase } from 'src/application/use-cases/cats/create-cat/create-cat.use-case';
import { Cat } from 'src/domain/cat/entities/cat.entity';

@ApiTags('api/v1/cats')
@Controller('api/v1/cats')
export class CreateCatController extends AsyncController<any> {
	constructor(private readonly createCatUseCase: CreateCatUseCase) {
		super();
	}

	@Post()
	async handler(
		@Body(new ValidationPipe()) createCatDTO: RestCreateCatDTO,
	): Promise<Cat> {
		return this.createCatUseCase.execute(createCatDTO);
	}
}
