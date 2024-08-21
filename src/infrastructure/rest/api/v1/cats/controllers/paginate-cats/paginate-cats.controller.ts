import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Cat } from 'src/domain/cat/entities/cat.entity';

import { PaginateCatsUseCase } from 'src/application/use-cases/cats/paginate-cats.use-case';
import { PaginatedEntityDTO } from 'src/application/use-cases/base/dto/outputs/paginated-entity.dto';

import { AsyncController } from 'src/infrastructure/rest/base/abstract/async-controller.abstract';

import { PaginateCatsDTO } from './paginate-cats.dto';

@ApiTags('api/v1/cats')
@Controller('api/v1/cats')
export class PaginateCatsController extends AsyncController<any> {
	constructor(private readonly paginateCatsUseCase: PaginateCatsUseCase) {
		super();
	}
	@ApiResponse({
		status: 200,
		description: 'Return all cats paginated',
		type: PaginatedEntityDTO<Cat>,
	})
	@Get()
	async handler(
		@Query() paginateCatsDto: PaginateCatsDTO,
	): Promise<PaginatedEntityDTO<Cat>> {
		return await this.paginateCatsUseCase.execute(paginateCatsDto);
	}
}
