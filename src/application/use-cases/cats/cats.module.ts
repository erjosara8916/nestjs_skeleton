import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cat } from 'src/infrastructure/persistence/typeorm/entities/cat.entity';

import { PaginateCatsUseCase } from './paginate-cats.use-case';
import { CreateCatUseCase } from './create-cat/create-cat.use-case';

@Module({
	imports: [TypeOrmModule.forFeature([Cat])],
	controllers: [],
	providers: [PaginateCatsUseCase, CreateCatUseCase],
	exports: [
		TypeOrmModule.forFeature([Cat]),
		PaginateCatsUseCase,
		CreateCatUseCase,
	],
})
export class CatsModule {}
