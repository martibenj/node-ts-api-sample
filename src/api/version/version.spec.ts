import request = require('supertest');
import { Response } from 'supertest';

import { app } from '../../app';

describe('/version', () => {
  test('Should return the version and internalVersion', () => {
    return request(app)
      .get('/version')
      .then((response: Response) => {
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/json'));
        expect(response.body.version).toBeDefined();
      });
  });
});
