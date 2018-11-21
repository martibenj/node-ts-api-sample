import express = require('express');
import os = require('os');
import { Request, Response } from 'express';

enum Status {
  OK = 'ok'
}

const router = express.Router({ mergeParams: true });

/** Get the app status. */
router.get('/', (req: Request, res: Response) => {

    const responseContent: any = {
      status: Status.OK,
      hostname: os.hostname(),
      uptime: process.uptime()
    };

    res.json(responseContent);
  }
);

export { router };
