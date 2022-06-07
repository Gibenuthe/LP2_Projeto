const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Acolhedor = require("./models/acolhedor");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Trab_refugiado:Ucrania123@cluster0.uw1pvuu.mongodb.net/AcolhedoresDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch(() => {
    console.log("Conexão NOK");
  });
app.use(bodyParser.json());

const acolhedores = [
  {
    id: "1",
    nome: "Jose",
    fone: "11223344",
    email: "jose@email.com",
  },
  {
    id: "2",
    nome: "Jaqueline",
    fone: "22112211",
    email: "jaqueline@email.com",
  },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/acolhedores", (req, res, next) => {
  const acolhedor = new Acolhedor({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
  });
  acolhedor.save().then((acolhedorInserido) => {
    res.status(201).json({
      mensagem: "Acolhedor inserido",
      id: acolhedorInserido._id,
    });
  });
});

app.get("/api/acolhedores", (req, res, next) => {
  Acolhedor.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      acolhedores: documents,
    });
  });
});

app.delete("/api/acolhedores/:id", (req, res, next) => {
  Acolhedor.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Acolhedor removido" });
  });
});

module.exports = app;
