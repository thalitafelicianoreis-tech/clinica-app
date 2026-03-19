<template>
  <nav class="navBar">

    <h3>Clínica Médica</h3>

    <div class="links">

      <router-link v-if="tipo === 'funcionario'" to="/funcionario"
      >Funcionário</router-link>
      <router-link v-if="tipo === 'paciente'" to="/paciente"
      >Paciente</router-link>
      <button @click="logout">Sair</button>

    </div>

  </nav>
</template>

<script>
export default {
data(){
return{
tipo:""
}
},

mounted(){

this.tipo = localStorage.getItem("tipo")

},

methods:{

logout(){

localStorage.removeItem("token")
localStorage.removeItem("tipo")

this.$router.push("/")

}

}

}
</script>


