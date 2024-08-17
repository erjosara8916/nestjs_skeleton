import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cat } from 'src/core/database/entities/cat.entity';

import { CatsController } from "./cats.controller";
import { CatsService } from './cats.service';


@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}
