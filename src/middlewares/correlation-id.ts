import correlator = require('express-correlation-id');
import { NextFunction, Request, Response } from 'express';

const headerKey = 'X-Request-Id';

/**
 * Inject the correlation id in every response.
 * The `express-correlation-id` must be used for this middleware to work
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
const responseCorrelation = (req: Request, res: Response, next: NextFunction) => {
  res.set(headerKey, correlator.getId());
  next();
};

export const correlationMiddlewares = [
  correlator({ header: headerKey }),
  responseCorrelation
];

/**
 * Return the correlation id wrapped in a winston friendly object
 * @returns {{correlationId: string}}
 */
export const correlationMetadata = () => ({ correlationId: correlator.getId() });

/**
 * Return the correlation id wrapped in a request-promise friendly object
 * @returns {{[p: string]: string}}
 */
export const correlationHeader = () => ({ [headerKey]: correlator.getId() });
