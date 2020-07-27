import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getHello(): string {
    return 'Hello Product!';
  }

  createProduct(id, body) {
    return {
      id,
      ...body,
    }
  }
}
