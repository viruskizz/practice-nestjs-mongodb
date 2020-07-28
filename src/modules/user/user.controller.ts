import { Body, Controller, Get, Post, Put, Param, Patch, Delete, Query } from '@nestjs/common';
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
    return this.userService.createUsers(body);
  }

  @Patch(':id')
  updateUser(@Param('id') id, @Body() body): Promise<User> {
    return this.userService.updateUser(id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id): Promise<any> {
    return this.userService.deleteUser(id);
  }

  @Get('search')
  searchUsers(@Query() query): Promise<User[]> {
    return this.userService.searchUser(query);
  }

  @Get('hello')
  getHello(): string {
    return this.userService.getHello();
  }
}
