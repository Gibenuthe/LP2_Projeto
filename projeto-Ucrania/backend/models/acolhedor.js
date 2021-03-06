//importando o pacote
const mongoose = require("mongoose");
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const acolhedorSchema = mongoose.Schema({
  nome: { type: String, required: true },
  fone: { type: String, required: false, default: "00000000" },
  email: { type: String, required: true },
  pais: { type: String, required: true, default: "Ucrania"},
  pessoas: { type: Number, required: true, default: 1},
  animais: { type: Boolean, required: true, default: false},
  idiomas: { type: String, required: true}
});
//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model("Acolhedor", acolhedorSchema);
