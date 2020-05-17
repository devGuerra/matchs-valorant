import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';
import { connect_db, db_opt } from './config/database';

class App {
  constructor() {
    this.express = express();

    this.mongoose();
    this.middlewares();
    this.routes();
  }

  mongoose() {
    mongoose.connect(connect_db, db_opt);

    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('error', err => {
      console.error('Connection with mongo catch error', err);
    });
    mongoose.connection.on('disconnecte', () => {
      console.log('Connection with data base lost!');
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
