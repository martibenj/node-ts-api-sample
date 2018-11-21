import { logger } from '../logger/logger';
import { NextFunction, Request, Response } from 'express';

import { correlationMetadata } from './correlation-id';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let stringified;
  try {
    stringified = JSON.stringify(err);
  } catch (e) {
    stringified = 'Could not stringify error';
  }

  logger.error(`[ErrorHandler] Unexpected error: ${err.toString()}\n${stringified}\n${err.stack}`, correlationMetadata());
  res.status(err.statusCode || 500);
  res.json({ error: err.message });
};
