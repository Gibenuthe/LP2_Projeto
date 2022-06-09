const express = require("express");
const router = express.Router();
const Acolhedor = require("../models/acolhedor");

router.post("", (req, res, next) => {
  const acolhedor = new Acolhedor({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
    pais: req.body.pais,
    pessoas: req.body.pessoas,
    animais: req.body.animais,
    idiomas: req.body.idiomas,
  });
  acolhedor.save().then((acolhedorInserido) => {
    res.status(201).json({
      mensagem: "Acolhedor inserido",
      id: acolhedorInserido._id,
    });
  });
});

router.get("/:id", (req, res, next) => {
  Acolhedor.findById(req.params.id).then((aco) => {
    if (aco) {
      res.status(200).json(aco);
    } else res.status(404).json({ mensagem: "Acolhedor não encontrado!" });
  });
});

router.delete("/:id", (req, res, next) => {
  Acolhedor.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Acolhedor removido" });
  });
});

router.put("/:id", (req, res, next) => {
  const acolhedor = new Acolhedor({
    _id: req.params.id,
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
    pais: req.body.pais,
    pessoas: req.body.pessoas,
    animais: req.body.animais,
    idiomas: req.body.idiomas,
  });
  Acolhedor.updateOne({ _id: req.params.id }, acolhedor).then((resultado) => {
    console.log(resultado);
  });
  res.status(200).json({ mensagem: "Atualização realizada com sucesso" });
});

router.get("", (req, res, next) => {
  Acolhedor.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      acolhedores: documents,
    });
  });
});

module.exports = router;
