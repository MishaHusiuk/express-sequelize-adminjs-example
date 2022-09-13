const express = require("express");
const router = express.Router();
const { sequelize } = require("../db");

router.get("/users", async (req, res) => {
  const users = await sequelize.models.User.findAll();
  res.send(users);
});

router.post("/users", async (req, res) => {
  const { firstName, lastName } = req.body;
  await sequelize.models.User.create({ firstName, lastName });
  res.send(201);
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
  await sequelize.models.Comment.create({ 
    text,
    upvotes,
    downvotes,
    UserId: userId
  });
  res.send(201);
});

module.exports = router;

