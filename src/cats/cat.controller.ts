import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req, Param, Body, Delete, HttpException, HttpStatus, UseFilters, ParseIntPipe, UsePipes, UseGuards } from '@nestjs/common';

import { ForbiddenException } from 'src/common/exceptions/ForbiddenException';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';

import { CreateCatDto } from './create_cat.dto';
import { ListAllEntities } from './ListAllEntities.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Roles } from 'src/common/guards/roles.decorator';

@Controller('cats')
export class CatController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
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

  @Get(':index')
  findOne(@Param('index', ParseIntPipe) index: number): Cat {
    return this.catsService.findOne(index);
  }

  @Delete(':index')
  @Roles(['admin'])
  remove(@Param('index') index: string): string {
    return "Resource deleted"
  }

  @Get('*')
  @Redirect('/cats', 301)
  getRedirect() { }


}
