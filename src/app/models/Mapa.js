import { SchemaTypes, Schema, model, Mongoose, SchemaType } from 'mongoose';
import crypto from 'crypto';

export const MapaSchema = new Schema({
  name: {
    type: String,
    default: '',
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Mapa', MapaSchema);
