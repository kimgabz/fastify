const Dao = require('../dao/temp.dao');

const tempService = (fastify) => {
  const dao = Dao(fastify);

  const getAll = async () => dao.getAll();

  const save = (title) => dao.save(title);

  return { getAll, save };
};

module.exports = tempService;
