const express = require("express");
const router = express.Router();
const initDB = require("../db");

router.get("/users", async (req, res) => {
  const { User } = await initDB();
  const users = await User.findAll();
  res.send(users);
});

router.post("/users", async (req, res) => {
  const { firstName, lastName } = req.body;
  const { User } = await initDB();
  await User.create({ firstName, lastName });
  res.send(201);
});

router.get("/users/:userId/comments", async (req, res) => {
  const userId = Number(req.params.userId);
  const { Comment } = await initDB();
  const comments = await Comment.findAll({
    where: {
      UserId: userId
    }
  });
  res.send(comments);
});

router.post("/users/:userId/comments", async (req, res) => {
  const { text, upvotes, downvotes } = req.body;
  const userId = Number(req.params.userId);
  const { Comment } = await initDB();
  await Comment.create({ 
    text,
    upvotes,
    downvotes,
    UserId: userId
  });
  res.send(201);
});

module.exports = router;

