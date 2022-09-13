const express = require("express");
const router = express.Router();
const { sequelize } = require("../db");

router.get("/users", async (req, res) => {
  const users = await sequelize.models.User.findAll();
  res.send(users);
});

router.post("/users", async (req, res) => {
  const { firstName, lastName } = req.body;
  const user = await sequelize.models.User.create({ firstName, lastName });
  res.status(201).send(user);
});

router.get("/users/:userId/comments", async (req, res) => {
  const userId = Number(req.params.userId);
  const comments = await sequelize.models.Comment.findAll({
    where: {
      UserId: userId
    }
  });
  res.send(comments);
});

router.post("/users/:userId/comments", async (req, res) => {
  const { text, upvotes, downvotes } = req.body;
  const userId = Number(req.params.userId);
  const comment = await sequelize.models.Comment.create({ 
    text,
    upvotes,
    downvotes,
    UserId: userId
  });
  res.status(201).send(comment);
});

module.exports = router;

