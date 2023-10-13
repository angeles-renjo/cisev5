// src/user/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interface/user.interface';
import * as bcrypt from 'bcrypt';

import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findOne(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username });
    return user;
  }

  async insertUser(userName: string, password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const newUser = new this.userModel({
      username: userName,
      password: hashedPassword,
    });

    const existingUser = await this.userModel.findOne({ username: userName });
    if (existingUser) {
      throw new HttpException(
        'Username already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new HttpException(
        'Password does not meet requirements',
        HttpStatus.BAD_REQUEST,
      );
    }

    await newUser.save();
    return newUser;
  }
}
