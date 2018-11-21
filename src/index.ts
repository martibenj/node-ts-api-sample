import config = require('config');
import { app } from './app';
import { logger } from './logger/logger';

const startTime = Date.now();

logger.info(`[App] Starting server with env: ${process.env.NODE_ENV}`);

// Create our HTTP server listening
const port = config.get('port');
app.listen(port, () => {
  const duration = Date.now() - startTime;
  logger.info(`[App] Server started on port ${port} in ${duration}ms`);
  logger.info(`[App] Config: ${JSON.stringify(config.util.getConfigSources())}`);
});
