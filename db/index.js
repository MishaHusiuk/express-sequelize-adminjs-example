const { Sequelize } = require("sequelize");
const initModels = require("./models");

const initDB = () => {
  const sequelize = new Sequelize("test_db", "postgres", "guest", {
    host: "localhost",
    dialect: "postgres",
  });

  return initModels(sequelize);
};

module.exports = initDB;
