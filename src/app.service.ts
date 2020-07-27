import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Log in service')
    return 'Hello World! 888';
  }
}
