import { Module } from '@nestjs/common';

import { CatsModule as CatsUseCaseModule } from 'src/application/use-cases/cats/cats.module';
import { PaginateCatsUseCase } from 'src/application/use-cases/cats/paginate-cats.use-case';

import { CreateCatController } from './controllers/create-cat/create-cat.controller';
import { PaginateCatsController } from './controllers/paginate-cats/paginate-cats.controller';
import { UpdateCatController } from './controllers/update-cat/update-cat.controller';
import { DeleteCatController } from './controllers/delete-cat/delete-cat.controller';

@Module({
	imports: [CatsUseCaseModule],
	providers: [PaginateCatsUseCase],
	controllers: [
		CreateCatController,
		PaginateCatsController,
		UpdateCatController,
		DeleteCatController,
	],
})
export class CatsModule {}
