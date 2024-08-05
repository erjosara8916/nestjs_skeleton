import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Req, Param, Body, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create_cat.dto';
import { ListAllEntities } from './ListAllEntities.dto';

@Controller('cats')
export class CatController {
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    return JSON.stringify(createCatDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<string> {
    return "This is an example";
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
