import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getAllUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  @Post('')
  postUser(@Body() body): Promise<User> {
    console.log(body)
    return this.userService.createUsers(body);
  }

  @Get('hello')
  getHello(): string {
    return this.userService.getHello();
  }
}
