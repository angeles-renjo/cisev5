//user.controller.ts
import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  // make sure the class name is UsersController
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Post('/signup')
  async addUser(
    @Body('username') userName: string,
    @Body('password') userPassword: string,
  ) {
    const result = await this.usersService.insertUser(userName, userPassword);
    return {
      msg: 'User successfully registered',
      userId: result.id,
      username: result.username,
    };
  }
}
