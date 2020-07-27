import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hello')
  getHello(): string {
    console.log(process.env.MONGODB_CONNECT);
    return this.userService.getHello();
  }
}
