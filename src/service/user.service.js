const moment = require('moment');
const UserRepository = require('../dao/user.dao');

const UserService = (fastify) => {
  const userRepository = UserRepository(fastify.db);

  const getUserById = async (userId) => {
    const user = await userRepository.getUserById(userId);
    console.log('user', user);
    const username = [user.first_name, user.middle_name, user.last_name]
      .filter((name) => name !== '')
      .filter((name) => name !== null)
      .filter((name) => name !== undefined)
      .join(' ');
    return {
      id: user.id,
      username,
      email: user.email,
      createdAt: moment(user.created_at).format('DD/MM/YYYY'),
      updatedAt: moment(user.updated_at).format('DD/MM/YYYY'),
      version: user.version,
    };
  };

  const createUser = async (user) => {
    const userId = await userRepository.saveUser(user);
    return userId;
  };

  return { getUserById, createUser };
};

module.exports = UserService;
