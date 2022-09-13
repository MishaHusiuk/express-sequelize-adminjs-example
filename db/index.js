const { Sequelize } = require("sequelize");
const initModels = require("./models");

const sequelize = new Sequelize("postgres", "postgres", "guest", {
  host: "localhost",
  dialect: "postgres",
});

const initDB = async () => {
  await initModels(sequelize);
};

module.exports = {
  initDB,
  sequelize
};
