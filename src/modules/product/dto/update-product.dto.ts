import { IsNumber, IsString, Min, IsOptional } from 'class-validator';

export class UpdateProductDto {

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  price: number;
}
