import { SchemaTypes, Schema, model, Mongoose, SchemaType } from 'mongoose';
import crypto from 'crypto';

const MatchSchema = new Schema({
  matchType: {
    type: String,
    default: 'unranked',
  },
  status: {
    type: String,
    default: 'lobby',
  },
  maps: [
    {
      name: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        default: false,
      },
      cover: {
        type: String,
      },
      layout: {
        type: String,
      },
    },
  ],
  winner: {
    type: String,
  },
  players: [
    {
      id: {
        type: Number,
        required: true,
        unique: true,
      },
      username: {
        type: String,
        default: '',
      },
      score: {
        type: Number,
        default: 0,
      },
      avatar: {
        type: String,
        required: false,
      },
    },
  ],
  teams: [
    {
      name: {
        type: String,
        default: 'teamA',
      },
      token: {
        type: String,
        unique: true,
      },
      lineUp: [Object],
    },
    {
      name: {
        type: String,
        default: 'teamB',
      },
      token: {
        type: String,
        unique: true,
      },
      lineUp: [Object],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Match', MatchSchema);
