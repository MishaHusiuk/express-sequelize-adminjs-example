const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Comment = sequelize.define('Comment',  {
    text: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER
  });
  return Comment;
}