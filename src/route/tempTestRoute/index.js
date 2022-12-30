const tempService = require('../../service/temp.service');
const { postReqBody, postResBody, getResBody } = require('./temp.schema');

const route = async (fastify) => {
  // get route api/v1/test
  const { getAll, save } = tempService(fastify);

  fastify.get(
    '/',
    { schema: { response: getResBody } },
    async (request, reply) => {
      const allTest = await getAll();

      reply.code(200).send({
        temps: allTest,
      });
    }
  );

  // post route
  fastify.post(
    '/',
    { schema: { body: postReqBody, response: postResBody } },
    async (request, reply) => {
      fastify.log.info(`request with body ${request}`);
      const { title } = request.body;

      const id = await save(title);

      reply.code(201).send(id);
    }
  );
};

module.exports = route;
