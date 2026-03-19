<template>
  <nav class="navBar">

    <h3>Clínica Médica</h3>

    <div class="links">

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


