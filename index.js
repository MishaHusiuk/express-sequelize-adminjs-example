const express = require("express");
const router = require("./server/router");
const initAdmin = require("./server/admin");
const initDB = require("./db");

(async() => {
  const { User, Comment } = await initDB();

  const app = express();
  
  app.use(express.json());
  
  app.use(router);

  const admin = initAdmin([ User, Comment ]);
  app.use(admin.rootPath, admin.router);
  
  app.listen(3000, () => {
    console.log("listening on https://localhost:3000");
  });
})()

