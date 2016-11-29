const express = require("express");

const app = express();

app.get("/hello", (req,res) => res.send("Olá mundo!"));

app.get("/greet", (req,res) => res.send(`Olá, ${req.query.nome}!`));

app.get("/queryparams", (req,res) => {
  console.log(req.query);
  res.send("Veja no console");
});

app.listen(3000);