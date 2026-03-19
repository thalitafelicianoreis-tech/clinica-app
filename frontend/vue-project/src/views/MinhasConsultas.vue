<template>
<div class="container">

<h2>Minhas Consultas</h2>

<div v-if="consultas.length === 0">
Nenhuma consulta encontrada.
</div>

<table v-else>

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
<td>{{ consulta.data }}</td>
<td>{{ consulta.horario }}</td>
</tr>
</tbody>

</table>

</div>
</template>

<script>
import api from "../api/api"

export default {

  data() {
    return {
      consultas: []
    }
  },

  async mounted() {

    const usuarioId = localStorage.getItem("usuarioId")

    console.log("Usuario ID:", usuarioId) 

    try {

      const res = await api.get(`/consultas/listar/${usuarioId}`)

      console.log("Consultas:", res.data) 

      this.consultas = res.data

    } catch (error) {

      console.error("Erro ao buscar consultas", error)

    }

  }

}
</script>
