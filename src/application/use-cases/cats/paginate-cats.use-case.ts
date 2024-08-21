import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cat } from 'src/infrastructure/persistence/typeorm/entities/cat.entity';

import { UseCaseAsync } from '../base/abstract/use-case-async.abstract';
import { PaginateEntityDTO } from '../base/dto/inputs/paginate-entity.dto';
import { PaginatedEntityDTO } from '../base/dto/outputs/paginated-entity.dto';

@Injectable()
export class PaginateCatsUseCase extends UseCaseAsync<
	PaginateEntityDTO<Cat>,
	PaginatedEntityDTO<Cat>
> {
	constructor(
		@InjectRepository(Cat)
		private catsRepository: Repository<Cat>,
	) {
		super();
	}

	async execute(
		paginateCatDTO: PaginateEntityDTO<Cat>,
	): Promise<PaginatedEntityDTO<Cat>> {
		const where = paginateCatDTO.filter ? paginateCatDTO.filter : {};
		const page = +paginateCatDTO.page;
		const limit = +paginateCatDTO.limit;
		const offset = (page - 1) * limit;

		const [items, total_items] = await this.catsRepository.findAndCount({
			where,
			skip: offset,
			take: limit,
			/* order: sort ? { [sort.split(':')[0]]: sort.split(':')[1].toUpperCase() } : undefined, */
		});

		const response = { items, total_items };
		return response;
	}
}
