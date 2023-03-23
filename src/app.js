const fastify = require('fastify');
const db = require('./plugin/database');
const testRoute = require('./route/tempTestRoute');
// const swaggerPg = require('./plugin/swagger');
const userRoute = require('./route/user');
const jobRoute = require('./route/job');

const build = (opts = {}) => {
  const app = fastify(opts);

  // register plugins
  app.register(db);
  // app.register(swaggerPg);
  // app.register(authenticate);

  // register route
  app.register(testRoute, { prefix: 'api/v1/test' });
  app.register(userRoute, { prefix: 'api/v1/users' });
  app.register(jobRoute, { prefix: 'api/v1/jobs' });

  app.get('/', async (request, reply) => {
    reply.code(200);
    reply.send({ hello: 'World!' });
  });

  return app;
};

module.exports = build;
