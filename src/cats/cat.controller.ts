import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req, Param, Body, Delete, HttpException, HttpStatus, UseFilters } from '@nestjs/common';

import { CreateCatDto } from './create_cat.dto';
import { ListAllEntities } from './ListAllEntities.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/common/exceptions/ForbiddenException';


@Controller('cats')
export class CatController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('docs')
  @Redirect('/cats', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param('id') id:string): string {
    return `This action returns a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    throw new ForbiddenException();
  }

  @Get('*')
  @Redirect('/cats', 301)
  getRedirect() { }


}
