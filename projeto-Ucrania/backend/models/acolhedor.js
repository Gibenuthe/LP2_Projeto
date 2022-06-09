//importando o pacote
const mongoose = require("mongoose");
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const acolhedorSchema = mongoose.Schema({
  nome: { type: String, required: true },
  fone: { type: String, required: false, default: "00000000" },
  email: { type: String, required: true },
  // pais: { type: String, }
  // pessoas:
  // animais:
  // idiomas:
});
//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model("Acolhedor", acolhedorSchema);
