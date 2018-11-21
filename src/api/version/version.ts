import express = require('express');
import fs = require('fs');
import { Request, Response } from 'express';

const router = express.Router({ mergeParams: true });

/**
 * Get the app version
 */
router.get('/', (req: Request, res: Response) => {
    const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    res.json({ version });
  }
);

export { router };
