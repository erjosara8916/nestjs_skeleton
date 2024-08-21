import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cat } from 'src/infrastructure/persistence/typeorm/entities/cat.entity';

import { UseCaseAsync } from '../../base/abstract/use-case-async.abstract';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CreateCatUseCase extends UseCaseAsync<CreateCatDto, Cat> {
	constructor(
		@InjectRepository(Cat)
		private catsRepository: Repository<Cat>,
	) {
		super();
	}

	async execute(createCatDto: CreateCatDto): Promise<Cat> {
		return this.catsRepository.save(createCatDto);
	}
}
