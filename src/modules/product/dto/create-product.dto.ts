import { IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {

  @IsString()
  @MinLength(4)
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  price: number;
}
