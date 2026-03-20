<template>
<div class="container">
<h2>Login</h2>

    
<input v-model="email" placeholder="Email" />
<input v-model="senha" type="password" placeholder="Senha" />

<button @click="login">Entrar</button>

<p v-if="erroMensagem" class="erro-alerta">
{{ erroMensagem }}
</p>

<p>
Não tem conta?
<router-link to="/register">Cadastrar</router-link>
</p>

</div>
</template>

<script>
import api from "../api/api"


export default {
  data() {
    return {
      email: "",
      senha: "",
      erroMensagem: "" 
    }
  },
  

  methods: {
 async login() {

  this.erroMensagem = "";

  if (!this.email || !this.senha) {
    this.erroMensagem = "Preencha todos os campos!";
    return;
  }

  try {
    const res = await api.post("/auth/login", {
      email: this.email,
      senha: this.senha
    });

console.log(res.data)

localStorage.setItem("token", res.data.token);
localStorage.setItem("tipo", res.data.tipo);
localStorage.setItem("usuarioId", res.data.usuarioId)

if (res.data.tipo === "paciente") {
  this.$router.push("/dashboard-paciente");
} else {
  this.$router.push("/dashboard-secretario");

}


  } catch (error) {

    if (error.response && error.response.status === 401) {
      this.erroMensagem = "Usuário ou senha incorretos!";
    } else {
      this.erroMensagem = "Erro ao conectar com o servidor. Tente mais tarde.";
    }

  }
}
  }
}
</script>

<style scoped>
.erro-alerta {
  
  color: #ff4d4d;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
}
</style>