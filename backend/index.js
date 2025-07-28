const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const { mensaje } = req.body;
  res.json({ respuesta: `Hola, recibí tu mensaje: "${mensaje}"` });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
