<template>
<div class="container">

<h2>Área do Paciente</h2>

<div class="menu">

<router-link to="/agendamento" class="card">
Agendar Consulta
</router-link>

<router-link to="/minhas-consultas" class="card">
Minhas Consultas
</router-link>

</div>

</div>
</template>

<style scoped>

.menu{
display:flex;
gap:20px;
margin-top:20px;
}

.card{
padding:20px;
background:#4CAF50;
color:white;
border-radius:8px;
text-decoration:none;
font-weight:bold;
}

.card:hover{
background:#3e9442;
}

</style>
