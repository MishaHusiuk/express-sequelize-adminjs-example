const express = require('express');
const router = require('./server/router');
const initDB = require('./db');

const app = express();

app.use(express.json());

app.use(router);

(async() => {
  const { syncDB } = initDB();
  await syncDB();
  console.log('db is synced');

  app.listen(3000, () => {
    console.log('listening on https://localhost:3000');
  })
})()