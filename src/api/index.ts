import express = require('express');

import { router as statusRouter } from './status/status';
import { router as versionRouter } from './version/version';

const router = express.Router({ mergeParams: true });

router.use('/status', statusRouter);
router.use('/version', versionRouter);

export { router };
