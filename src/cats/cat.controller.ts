import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req, Param, Body, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create_cat.dto';
import { ListAllEntities } from './ListAllEntities.dto';
import { CatsService } from './cats.service';

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
    return `This action removes a #${id} cat`
  }

  @Get('*')
  @Redirect('/cats', 301)
  getRedirect() { }


}
