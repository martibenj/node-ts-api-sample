import correlator = require('express-correlation-id');

import { correlationHeader, correlationMetadata, correlationMiddlewares } from './correlation-id';

jest.mock('express-correlation-id');

describe('Correlation id middleware', () => {

  let mockResponse: any;
  let mockNext: any;

  beforeEach(() => {
    jest.clearAllMocks();

    correlator.getId = jest.fn().mockReturnValue('mock id');
    mockResponse = { set: jest.fn() };
    mockNext = jest.fn();
  });

  describe('responseCorrelation', () => {
    test('Should inject the correlation id in the response', () => {
      correlationMiddlewares[1](null, mockResponse, mockNext);
      expect(mockResponse.set).toHaveBeenCalledWith('X-Request-Id', 'mock id');
    });
  });

  describe('correlationMetadata', () => {
    test('Should return the correlation id', () => {
      expect(correlationMetadata()).toEqual({ correlationId: 'mock id' });
    });
  });

  describe('correlationHeader', () => {
    test('Should return the correlation id', () => {
      expect(correlationHeader()).toEqual({ 'X-Request-Id': 'mock id' });
    });
  });

});
