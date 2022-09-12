const { Sequelize } = require("sequelize");
const initUser = require("./user");

const initDB = async () => {
  const sequelize = new Sequelize("test_db", "postgres", "guest", {
    host: "localhost",
    dialect: "postgres",
  });

  const User = initUser(sequelize);

  await sequelize.sync();
  return {
    User,
  };
};

module.exports = initDB;