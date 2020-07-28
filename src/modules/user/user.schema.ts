
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  strict: false,
})
export class User extends Document {
  @Prop({ required: true })
  username: string;

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

  @Prop({type: [String]})
  talents: string[];
}
export const UserSchema = SchemaFactory.createForClass(User);
