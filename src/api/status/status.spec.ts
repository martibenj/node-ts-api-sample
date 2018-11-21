import request = require('supertest');
import { Response } from 'supertest';

import { app } from '../../app';

describe('/status', () => {
  test('Should return the status of the app', () => {
    return request(app)
      .get('/status')
      .then((response: Response) => {
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/json'));
        expect(response.body.status).toEqual('ok');
        expect(response.body.hostname).toBeDefined();
        expect(response.body.uptime).toBeGreaterThan(0);
      });
  });
});
