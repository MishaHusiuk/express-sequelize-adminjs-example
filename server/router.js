const express = require('express');
const router = express.Router()
const initDB = require('./db');

router.get('/users', async (req, res, next) => {
  const { User } = initDB();
  const users = User.findAll();
  res.send(users);
})

router.post('/users', (req, res, next) => {
  const { User } = initDB();
  User.build()

  const users = User.findAll();
  res.send(201);
})

module.exports = router;