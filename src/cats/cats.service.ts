import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { CreateCatDto } from "./create_cat.dto";
import { Cat } from "./cat.entity";
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

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

  async findOne(id: number): Promise<Cat | null> {
    return await this.catsRepository.findOneBy({ id });
  }
}
