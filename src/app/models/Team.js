import { SchemaTypes, Schema, model, Mongoose, SchemaType } from 'mongoose';
import crypto from 'crypto';

import { UserSchema } from './User';

export const TeamSchema = new Schema({
  name: {
    type: String,
    default: '',
  },
  token: {
    type: String,
    default: '',
  },
  leader: { type: Schema.Types.ObjectId, ref: 'User' },
  players: [UserSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

TeamSchema.pre('save', function (next) {
  var id = crypto.randomBytes(10).toString('hex');
  this.token = id;
  next();
});

export default model('Team', TeamSchema);
