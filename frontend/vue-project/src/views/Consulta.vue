<template>
<div class="container">

<h2>Consultas Agendadas</h2>

<table>

<thead>
<tr>
<th>Paciente</th>
<th>Data</th>
<th>Horário</th>
</tr>
</thead>

<tbody>

<tr v-for="consulta in consultas" :key="consulta._id">
<td>{{ consulta.paciente }}</td>
<td>{{ formatarData(consulta.data) }}</td>
<td>{{ consulta.horario }}</td>
</tr>

</tbody>

</table>

</div>
</template>

<script>
import api from "../api/api"

export default{

  data(){
    return{
      consultas:[]
    }
  },

  async mounted(){

try{

const usuarioId = localStorage.getItem("usuarioId")

const res = await api.get(`/consultas/listar/${usuarioId}`)

this.consultas = res.data

}catch(error){

console.error("Erro ao buscar consultas")

}

},

methods: {
formatarData(data) {
return new Date(data).toLocaleDateString("pt-BR")
}
}

}
</script>

<style>

h2{
text-align: center;
}

th, td {
text-align: center;
}

table {
margin: 0 auto;
}

</style>
