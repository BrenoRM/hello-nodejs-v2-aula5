// exemplo-express-knex.js
const express = require("express");
const knex = require("./db");

const app = express();

app.get("/convidados", (req,res) => {
  knex("convidado").select().then((ret) => {
    res.send(ret)
  });
});

app.listen(3000);