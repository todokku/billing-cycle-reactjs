require('dotenv').config({ path: `${__dirname}/../.env` });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./app/routes');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(helmet());

    this.express.use(cors({
      origin: process.env.APP_DOMAIN,
    }));
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new AppController().express;
