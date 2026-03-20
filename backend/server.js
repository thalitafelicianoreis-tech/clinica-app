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

mongoose.connect("mongodb://localhost:27017/clinica")
.then(() => console.log("✅ Conectado ao MongoDB com sucesso!"))
.catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

app.get("/", (req,res)=>{
res.send("API da clínica funcionando")
   
}) 

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000 http://localhost:3000")
})









