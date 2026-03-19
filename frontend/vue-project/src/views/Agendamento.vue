<template>
  <div>
    
    
    <div class="container">
      <h2>Agendar Consulta</h2>

      <div v-if="clima" class="clima-info">
        <span>🌡️ {{ clima.temp }}°C em {{ cidade }} - {{ clima.descricao }}</span>
      </div>

      <label>Nome Completo</label>
      <input v-model="paciente" placeholder="Nome do paciente" />

      <label>Data da Consulta</label>
      <input v-model="data" type="date" />

      <label>Horário de agendamento</label>
      <input v-model="horario" type="time" />

      <label>CEP</label>
      <input v-model="cep" placeholder="Ex: 00000-000" @blur="buscarCep" />

      <label>Endereço</label>
      <input v-model="rua" placeholder="Rua" readonly />
      <input v-model="cidade" placeholder="Cidade" readonly />

      <button class="btn-agendar" @click="agendar">Agendar Consulta</button>
    </div>
  </div>
</template>

<script>
import api from "../api/api"
import Swal from 'sweetalert2'
import axios from 'axios'
import navBar from "../components/navBar.vue"

export default {
  components: { 
    navBar 
  },
  
  data() {
    return {
      paciente: "",
      data: "",
      horario: "",
      cep: "",
      rua: "",
      cidade: "",
      clima: null,
    
    }
  },

  methods: {
    async buscarCep() {
      if (!this.cep) return;
      try {
        const res = await api.get("/cep/" + this.cep);
        this.rua = res.data.logradouro;
        this.cidade = res.data.localidade;
        
        if (this.cidade) {
          this.buscarClima();
        }
      } catch (error) {
        console.error("Erro ao buscar CEP", error);
      }
    },

    async buscarClima() {
      const API_KEY = '84bcb23ec7531b52c5667a424f47da52'; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cidade}&units=metric&lang=pt_br&appid=${API_KEY}`;

      try {
        
        const res = await axios.get(url);
        this.clima = {
          temp: Math.round(res.data.main.temp),
          descricao: res.data.weather[0].description,
          principal: res.data.weather[0].main
        };

        // Alerta de chuva
        const condicoesChuva = ['Rain', 'Thunderstorm', 'Drizzle'];
        if (condicoesChuva.includes(this.clima.principal)) {
          Swal.fire({
            title: 'Aviso de Chuva!',
            text: `Há previsão de chuva para ${this.cidade}. Leve um guarda-chuva!`,
            icon: 'info',
            confirmButtonColor: '#2c7be5'
          });
        }
      } catch (error) {
        console.error("Erro ao buscar clima", error);
      }
    },

    async agendar() {
      if (!this.paciente || !this.data || !this.horario) {
        return Swal.fire('Atenção', 'Preencha os campos obrigatórios.', 'warning');
      }

      try {
        const usuarioId = localStorage.getItem("usuarioId")
        
        await api.post("/consultas/agendar", {
          paciente: this.paciente,
          data: this.data,
          horario: this.horario,
          usuarioId: usuarioId
        });

        Swal.fire({
          title: 'Sucesso!',
          text: 'Sua consulta foi agendada.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2c7be5'
        });
      } catch (error) {
        Swal.fire('Erro', 'Horário Indisponível!', 'error');
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 450px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  background: white;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-size: 0.9em;
  color: #555;
  text-align: left;
}

input {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box; 
}

input[readonly] {
  background-color: #f9f9f9;
  color: #777;
}

.btn-agendar {
  margin-top: 20px;
  padding: 15px;
  background-color: #2c7be5;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-agendar:hover {
  background-color: #1a5bb8;
}

.clima-info {
  background-color: #e3f2fd;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 5px solid #2196f3;
  color: #0d47a1;
  font-weight: 500;
}
</style>