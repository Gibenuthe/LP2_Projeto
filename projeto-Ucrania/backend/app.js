const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const acolhedorRoutes = require("./rotas/acolhedores");

mongoose
  .connect(
    "mongodb+srv://Trab_refugiado:Ucrania123@cluster0.uw1pvuu.mongodb.net/AcolhedoresDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch((e) => {
    console.log("Conexão NOK: " + e);
  });
app.use(bodyParser.json());

// const acolhedores = [
//   {
//     id: "1",
//     nome: "Jose",
//     fone: "11223344",
//     email: "jose@email.com",
//   },
//   {
//     id: "2",
//     nome: "Jaqueline",
//     fone: "22112211",
//     email: "jaqueline@email.com",
//   },
// ];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/acolhedores", acolhedorRoutes);
//app.use(acolhedorRoutes);

module.exports = app;
