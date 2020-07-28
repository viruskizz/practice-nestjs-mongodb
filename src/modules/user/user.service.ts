import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}

  createUsers(body: User) {
    const model = new this.userModel(body);
    return model.save()
      .catch(e => {throw new HttpException(e, 400)});
  }

  updateUser(id: string, body: any) {
    return this.userModel.updateOne({_id: id}, body)
      .catch(e => {throw new HttpException(e, 400)});
  }

  deleteUser(id: string) {
    return this.userModel.deleteOne({_id: id})
      .catch(e => {throw new HttpException(e, 400)});
  }

  getUsers() {
    return this.userModel.find({}).exec();
  }

  searchUser(param: any) {
    return this.userModel.find({
      'address.country': { $in: ['Thailand', 'Japan']}
      // age: {
      //   '$lt': 30
      // }
    }).select('username address.country age')
      .limit(1)
      .exec();
  }

  getHello(): string {
    return 'Hello User!!';
  }
}
