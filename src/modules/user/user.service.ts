import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}

  createUsers(body: User) {
    const model = new this.userModel(body);
    return model.save();
  }

  getUsers() {
    return this.userModel.find({}).exec();
  }
  getHello(): string {
    return 'Hello User!!';
  }
}
