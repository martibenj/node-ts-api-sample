import _ = require('lodash');
import morgan = require('morgan');
import { logger } from '../logger/logger';

import { correlationMetadata } from './correlation-id';

const EXCLUDED_URLS = ['/status'];

export const requestLogger = morgan(
  'tiny',
  {
    stream: {
      write: (message: string) => {
        logger.info(`[RequestLogger] ${message.trim()}`, correlationMetadata());
      }
    },
    skip: (req: any) =>  _.includes(EXCLUDED_URLS, req.baseUrl)
  });
