import { IsString, IsInt, IsOptional } from "class-validator";

export class PaginationDto {
  @IsInt()
  @IsOptional()
  limit: number;

  @IsInt()
  @IsOptional()
  page: number;

  @IsString()
  @IsOptional()
  sort: string;
}