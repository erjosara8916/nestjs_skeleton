import { IsString, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateCatDto {
  @ApiProperty({
    description: 'The name of a cat',
    
  })
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsString()
  breed: string;
}