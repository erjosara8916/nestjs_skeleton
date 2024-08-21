import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cat } from 'src/infrastructure/persistence/typeorm/entities/cat.entity';

import { PaginateCatsUseCase } from './paginate-cats.use-case';

@Module({
	imports: [TypeOrmModule.forFeature([Cat])],
	controllers: [],
	providers: [PaginateCatsUseCase],
	exports: [TypeOrmModule.forFeature([Cat]), PaginateCatsUseCase],
})
export class CatsModule {}
