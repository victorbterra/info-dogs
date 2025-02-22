import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

// API endpoints

app.get ("/", (req, res) => {
    res.json({ message: "BEM VINDO A ROTA PRINCIPAL !" });
})

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT} para acessar a rota principal entre neste link http://localhost:3000/`);
});
