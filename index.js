const express = require("express");
const router = require("./server/router");
const initAdmin = require("./server/admin");
const { initDB, sequelize } = require("./db");

(async() => {
  await initDB();

  const app = express();
  
  app.use(express.json());
  
  app.use(router);

  const admin = initAdmin([ sequelize.models.User, sequelize.models.Comment ]);
  app.use(admin.rootPath, admin.router);
  
  app.listen(3000, () => {
    console.log("listening on https://localhost:3000");
  });
})()

