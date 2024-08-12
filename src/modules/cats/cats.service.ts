import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "src/core/database/entities/cat.entity";
import { PaginationDao } from 'src/common/dao/http/pagination.dao';
@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>
  ) {}

  async create(cat: CreateCatDto) {
    const newCat = new Cat();
    newCat.name = cat.name;
    newCat.age = cat.age;
    newCat.breed = cat.breed;
    await this.catsRepository.save(newCat);
  }

  async findAll(PaginationDto): Promise<PaginationDao<Cat>> {
    const page = +PaginationDto.page
    const limit = +PaginationDto.limit;
    const offset = (page - 1) * limit;
    
    const [items, total_items] = await this.catsRepository.findAndCount({
      skip: offset,
      take: limit
      /* order: sort ? { [sort.split(':')[0]]: sort.split(':')[1].toUpperCase() } : undefined, */
    });

    const response = new PaginationDao<Cat>(items, page, limit, total_items);
    return response;
  }

  async findOne(id: number): Promise<Cat | null> {
    return await this.catsRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.catsRepository.delete(id);
  }
}
