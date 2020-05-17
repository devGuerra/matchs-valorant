import { SchemaTypes, Schema, model, Mongoose, SchemaType } from 'mongoose';
import crypto from 'crypto';

export const UserSchema = new Schema({
  username: {
    type: String,
    default: '',
  },
  leader: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: 0,
  },
  avatar: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('User', UserSchema);
