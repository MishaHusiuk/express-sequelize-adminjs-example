const express = require("express");
const router = require("./server/router");

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log("listening on https://localhost:3000");
});

