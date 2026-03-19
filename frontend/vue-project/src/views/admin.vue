<template>
<div>


<div class="container">


<h2>Painel de Consultas</h2>

<table>

<tr>
<th>Paciente</th>
<th>Data</th>
<th>Horário</th>
</tr>

<tr v-for="c in consultas" :key="c._id">

<td>{{c.paciente}}</td>
<td>{{c.data}}</td>
<td>{{c.horario}}</td>

</tr>

</table>
</div>
</div>

</template>

<script>
import api from "../api/api"
import navBar from "../components/navBar.vue"

export default{

components:{
navBar
},

data(){
return{
consultas:[]
}
},

async mounted(){

const res = await api.get("/consultas/listar")

this.consultas = res.data

}

}
</script>