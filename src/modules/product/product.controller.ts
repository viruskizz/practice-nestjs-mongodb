import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  HttpException,
  HttpStatus,
  BadRequestException, Header, Res, Put, Patch,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiQuery, ApiParam, ApiOperation } from '@nestjs/swagger';

@ApiTags('product')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('hello')
  getHello(): string {
    return this.productService.getHello();
  }

  @Get(':id')
  @ApiParam({name: 'id', type: String})
  @ApiQuery({name: 'name', type: String, description: 'ชื่อของผลิตภัณฑ์', required: false})
  @ApiOperation({description: 'รับข้อมูลผลิตภัณฑ์ตามที่ระบุ id'})
  getProduct(@Param() param, @Query('name') name) {
    return `this is product ${param.id} detail ${name}`;
  }

  @Post(':id')
  @ApiParam({name: 'id', type: String})
  @ApiOperation({description: 'สร้างผลิตภัณฑ์ใหม่'})
  createProduct(@Param('id') id, @Body() body: CreateProductDto) {
    if (!body.name) {
      // throw new HttpException('body is required', 400)
      // throw new HttpException({ message: 'error' }, HttpStatus.CONFLICT)
      throw new BadRequestException('body is required');
    }
    return this.productService.createProduct(id, body);
  }

  @Patch(':id')
  updateProduct(@Param('id') id, @Body() body: UpdateProductDto) {
    return this.productService.createProduct(id, body);
  }
}
