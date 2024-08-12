import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req, Param, Body, Delete, HttpException, HttpStatus, UseFilters, ParseIntPipe, UsePipes, UseGuards, UseInterceptors } from '@nestjs/common';

import { ValidationPipe } from 'src/common/pipes/validation.pipe';

import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntities } from './dto/ListAllEntities.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Roles } from 'src/common/guards/roles.decorator';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';

@Controller('cats')
export class CatController {
  constructor(
    private catsService: CatsService
  ) {
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
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
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Cat | null> {
    return this.catsService.findOne(id);
  }

  @Delete(':index')
  @Roles(['admin'])
  remove(@Param('index') index: string): string {
    return "Resource deleted!!"
  }

  @Get('*')
  @Redirect('/cats', 301)
  getRedirect() { }


}
