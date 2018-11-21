import bodyParser = require('body-parser');
import compression = require('compression');
import cors = require('cors');
import helmet = require('helmet');

import { correlationMiddlewares } from './correlation-id';
import { errorHandler } from './error-handler';
import { requestLogger } from './request-logger';

export const preApiMiddlewares = [
  requestLogger,
  cors(),
  compression(),
  helmet(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  correlationMiddlewares
];

export const postApiMiddlwares = [
  errorHandler
];
