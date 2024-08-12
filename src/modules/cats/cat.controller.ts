import { Controller, Get, Header, Post, Query, Redirect, Param, Body, Delete, HttpException, HttpStatus, UseFilters, ParseIntPipe, UsePipes, UseGuards, UseInterceptors } from '@nestjs/common';

import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { PaginationDto } from 'src/common/dto/http/pagination.dto';
import { Roles } from 'src/common/guards/roles.decorator';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';

import { CreateCatDto } from './dto/create-cat.dto';

import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { PaginationResponseInterface } from 'src/common/interfaces/pagination-response.interface';

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
  async findAll(
    @Query() query: PaginationDto
  ): Promise<PaginationResponseInterface<Cat>> {
    return this.catsService.findAll(query); 

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
