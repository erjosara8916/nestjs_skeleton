import { IsString, IsInt, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PaginationDto {
  @ApiProperty({
    description: 'The limit of items to get',
    default: 20,
    maximum: 100
  })
  @IsInt()
  @IsOptional()
  limit: number;

  @ApiProperty({
    description: 'The page to get',
    default: 1
  })
  @IsInt()
  @IsOptional()
  page: number;

  @ApiProperty({
    description: 'The fields to sort',
    example: 'name:asc'
  })
  @IsString()
  @IsOptional()
  sort: string;
}