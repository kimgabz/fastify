require('dotenv').config();

const PORT = process.env.PORT || 5000;
const pino = require('pino');
const pretty = require('pino-pretty');
const build = require('./src/app');

const logger = pino(pretty());

const start = async () => {
  const server = build({
    logger,
  });

  try {
    server.listen({
      port: PORT,
      host: '0.0.0.0',
    });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
