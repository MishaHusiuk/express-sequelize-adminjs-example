const initUserModel = require("./user");
const initCommentModel = require("./comment");

module.exports = async (sequelize) => {
  const User = initUserModel(sequelize);
  const Comment = initCommentModel(sequelize);

  User.hasMany(Comment);
  Comment.belongsTo(User);

  const force = Boolean(process.env.FORCE_SYNC);
  await sequelize.sync({ force });

  return {
    User,
    Comment
  }
}