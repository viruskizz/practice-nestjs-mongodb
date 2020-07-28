
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true
})
export class User extends Document {
  @Prop({ required: true })
  username: string

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop()
  age: number;

  @Prop({type: Boolean, default: true, required: true})
  isAvailable: boolean;

  @Prop(raw({
    province: String,
    country: String,
  }))
  address: {
    province: string;
    country: string
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
