require('dotenv').config();

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const authRoutes = require("./routes/authRoutes")
const cepRoutes = require("./routes/cepRoutes")
const consultaRoutes = require("./routes/consultaRoutes")
const climaRoutes = require("./routes/climaRoutes")


const app = express()

app.use (cors())
app.use (express.json())

app.use("/auth",authRoutes)
app.use("/cep", cepRoutes)
app.use("/consultas", consultaRoutes)
app.use("/clima", climaRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Conectado ao MongoDB com sucesso!"))
.catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

app.get("/", (req,res)=>{
res.send("API da clínica funcionando")
   
}) 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});









