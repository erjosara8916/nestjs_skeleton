import { 
  Controller, Get, Header, Post, Query, 
  Redirect, Param, Body, Delete,
  ParseIntPipe, UseInterceptors, 
  DefaultValuePipe
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiParam } from '@nestjs/swagger';

import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { PaginationDto } from 'src/common/dto/http/pagination.dto';
import { Roles } from 'src/common/guards/roles.decorator';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { PaginatedResponse } from './dto/paginated-response.dto';

import { CreateCatDto } from './dto/create-cat.dto';

import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';


@ApiTags('cats')
@Controller('cats')
export class CatController {
  constructor(
    private catsService: CatsService
  ) {
  }

  @Post()
  @Header('Cache-Control', 'none')
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOkResponse({ description: 'List of cats', isArray: true })
  @UseInterceptors(TransformInterceptor)
  async findAll(
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('limit', new DefaultValuePipe(20)) limit: number
  ): Promise<PaginatedResponse<Cat>> {
    let query = new PaginationDto();
    query.page = page;
    query.limit = limit;
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

  @Delete(':id')
  @Roles(['admin'])
  @ApiOkResponse({ description: 'Cat deleted', isArray: true })
  @ApiParam({ name: 'id', description: 'Cat id to delete' })
  remove(@Param('id') index: string): string {
    return "Resource deleted!!"
  }

  @Get('*')
  @Redirect('/cats', 301)
  getRedirect() { }

}
