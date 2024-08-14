import { 
  Controller, Get, Header, Post, Query, 
  Redirect, Param, Body, Delete,
  ParseIntPipe, UsePipes, UseGuards, UseInterceptors 
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiParam } from '@nestjs/swagger';

import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { PaginationDto } from 'src/common/dto/http/pagination.dto';
import { Roles } from 'src/common/guards/roles.decorator';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { PaginatedResponseInterface } from 'src/common/interfaces/http/paginated-response.interface';

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
    @Query() query: PaginationDto
  ): Promise<PaginatedResponseInterface<Cat>> {
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
