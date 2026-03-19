import { createRouter, createWebHistory } from "vue-router"

import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Agendamento from "../views/Agendamento.vue"
import Admin from "../views/admin.vue"
import DashboardPaciente from "../views/DashboardPaciente.vue"
import MinhasConsultas from "../views/MinhasConsultas.vue"
import DashboardSecretario from "../views/DashboardSecretario.vue"
import Consulta from "../views/Consulta.vue"

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/agendamento", component: Agendamento },
  { path: "/admin", component: Admin },
  { path: "/dashboard-paciente", component: DashboardPaciente },
  { path: "/minhas-consultas", component: MinhasConsultas },
  { path: "/dashboard-secretario", component: DashboardSecretario },
  { path: "/consulta",component: Consulta}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router