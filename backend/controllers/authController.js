const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerSchema } = require("../validator/validators");

exports.register = async (req, res) => {
  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    return res(422).json({
      message: result.error.issues[0].message,
    });
  }

  const { nome, email, senha, confirmSenha, tipo } = result.data;

  const senhaHash = await bcrypt.hash(senha, 10);

  const user = new User({
    nome,
    email,
    senha: senhaHash,
    tipo,
  });

  await user.save();

  res.json(user);
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }

  const valid = await bcrypt.compare(senha, user.senha);

  if (!valid) {
    return res.status(401).json({ msg: "Senha inválida" });
  }

  const token = jwt.sign(
    {
      id: user._id,
      nome: user.nome,
      tipo: user.tipo,
    },
    "segredo",
  );

  res.json({
    token,
    tipo: user.tipo,
    usuarioId: user._id,
  });
};
