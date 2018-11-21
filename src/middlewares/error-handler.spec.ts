import { errorHandler } from './error-handler';

describe('Error handler middleware', () => {

  let mockError: any;
  let mockResponse: any;

  beforeEach(() => {
    jest.clearAllMocks();

    mockError = new Error('mock message error');
    mockResponse = { status: jest.fn(), json: jest.fn() };
  });

  test('Should default to 500 status code', () => {
    errorHandler(mockError, null, mockResponse, null);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'mock message error' });
  });

  test('Should keep the error status code', () => {
    mockError.statusCode = 400;

    errorHandler(mockError, null, mockResponse, null);
    expect(mockResponse.status).toHaveBeenCalledWith(mockError.statusCode);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'mock message error' });
  });

});
