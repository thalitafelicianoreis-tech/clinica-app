<template>
<div class="container">

<h2>Painel do Secretário</h2>


<div class="menu">

<router-link to="/admin" class="card">
  Ver todas as consultas
</router-link>

</div>

</div>
</template>


<style scoped>

.menu {
  display: flex;
  justify-content: center; /* centraliza horizontal */
  margin-top: 20px;
}

h2{
text-align: center;
}


.card {
  padding: 20px;
  background: #2c7be5;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;
  
}

.card:hover {
  background: #1a5edb;
  transform: scale(1.05);
  text-align: center;
}


</style>
