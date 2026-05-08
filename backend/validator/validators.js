const { z } = require("zod");

const registerSchema = z
  .object({
    nome: z.string().min(1, "Campo nome obrigatório!"),
    email: z
      .string()
      .min(1, "Campo email obrigatório!")
      .email("Formato inválido"),
    senha: z
      .string()
      .trim()
      .min(8, "A senha precisa conter um mínimo de 8 caracteres!"),
    confirmSenha: z.string().min(1, "Campo confirmação de senha obrigatório!"),
  })
  .refine((data) => data.password === data.confirmSenha, {
    message: "Senhas não coincidem!",
    path: [confirmSenha],
  });

module.exports = { registerSchema };
