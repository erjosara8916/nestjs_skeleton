import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cat } from 'src/core/database/entities/cat.entity';

import { CatController } from "./cat.controller";
import { CatsService } from './cats.service';


@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}
