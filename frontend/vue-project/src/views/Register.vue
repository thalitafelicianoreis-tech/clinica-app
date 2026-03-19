<template>

<div class="container">

<h2>Cadastro</h2>

<input v-model="nome" placeholder="Nome" />
<input v-model="email" placeholder="Email" />
<input v-model="senha" type="password" placeholder="Senha" />

<select v-model="tipo">
<option value="paciente">Paciente</option>
<option value="secretario">Secretário</option>
</select>

<button @click="register">Cadastrar</button>

</div>

</template>

<script>

import Swal from "sweetalert2"
import api from "../api/api"

export default{

data(){
return{
nome:"",
email:"",
senha:"",
tipo:"paciente"
}
},

methods:{

async register(){

await api.post("/auth/register",{
nome:this.nome,
email:this.email,
senha:this.senha,
tipo:this.tipo
})

Swal.fire({
icon:"success",
title:"Sucesso!",
text:"Usuário cadastrado com sucesso!"
})

this.$router.push("/login")

}

}

}
</script>