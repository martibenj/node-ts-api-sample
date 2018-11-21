import express = require('express');

import { router as apiRouter } from './api';
import { postApiMiddlwares, preApiMiddlewares } from './middlewares';

export const app = express();
app.use(preApiMiddlewares);
app.use(apiRouter);
app.use(postApiMiddlwares);
