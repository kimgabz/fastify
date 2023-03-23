const UserRepository = (db) => {
  /* Get user by ID */
  const getUserById = async (userId) => {
    try {
      const user = await db.one('SELECT * FROM users WHERE id = $1', [userId]);
      return user;
    } catch (error) {
      throw Error(`${userId} does not exist`);
    }
  };

  /* save user to db */
  const saveUser = async (user) => {
    try {
      const { id } = await db.one(
        'INSERT INTO users(first_name, middle_name, last_name, password, email) VALUES($1, $2, $3, $4, $5) RETURNING id',
        [
          user.firstName,
          user.middleName,
          user.lastName,
          user.password,
          user.email,
        ]
      );

      return id;
    } catch (error) {
      throw Error('Not valid user data');
    }
  };

  const getUserByEmailId = async (email) => {
    try {
      const user = await db.one('select * from users where email = $1', [
        email,
      ]);
      return user;
    } catch {
      throw Error(`${email} does not exist!`);
    }
  };

  return { getUserById, saveUser, getUserByEmailId };
};

module.exports = UserRepository;
