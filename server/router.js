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

module.exports = router;
