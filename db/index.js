const { Sequelize } = require('sequelize');
const initUser = require('./user');

const initDB = () => {
  const sequelize = new Sequelize('test_db', 'postgres', 'guest', {
    host: 'localhost',
    dialect: 'postgres'
  })
  
  const User = initUser(sequelize);

  return {
    User,
    syncDB: sequelize.sync
  }
}

module.exports = initDB;