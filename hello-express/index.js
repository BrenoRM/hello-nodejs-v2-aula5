const express = require("express");

const app = express();

app.get("/hello", (req,res) => res.send("Olá mundo!"));
app.get("/greet", (req,res) => res.send(`Olá, ${req.query.nome}!`));

app.listen(3000);