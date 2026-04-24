const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Dados de exemplo (depois podemos melhorar)
const cursos = [
  { id: 1, nome: "NR-06 – Uso de EPI" },
  { id: 2, nome: "NR-23 – Combate a Incêndio" }
];

// Rota API
app.get("/api/cursos", (req, res) => {
  res.json(cursos);
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
