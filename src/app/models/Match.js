import { SchemaTypes, Schema, model, Mongoose, SchemaType } from 'mongoose';
import crypto from 'crypto';

import { UserSchema } from './User';
import { MapaSchema } from './Mapa';
import { TeamSchema } from './Team';

const MatchSchema = new Schema({
  matchType: {
    type: String,
    default: 'unranked',
  },
  status: {
    type: String,
    default: 'lobby',
  },
  maps: [MapaSchema],
  winner: {
    type: String,
  },
  teams: {
    unset: [UserSchema],
    teamA: TeamSchema,
    teamB: TeamSchema,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Match', MatchSchema);
