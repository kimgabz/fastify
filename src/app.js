const fastify = require('fastify');

const build = (opts = {}) => {
  const app = fastify(opts);

  app.get('/', async (request, reply) => {
    reply.code(200);
    reply.send({ hello: 'World!' });
  });

  return app;
};

module.exports = build;
