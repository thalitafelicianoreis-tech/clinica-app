const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  confirmSenha: String,
  tipo: String,
});

module.exports = mongoose.model("User", UserSchema);
