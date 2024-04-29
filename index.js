const express = require("express");
const app = express();
const cors = require("cors"); // Importa CORS
require("dotenv").config();

// Configuración de CORS para permitir solicitudes desde el origen del frontend
app.use(
  cors({
    origin: "http://localhost:3000", // Ajusta esto si tu URL del frontend es diferente
  })
);

// Middlewares
app.use(express.json()); // for parsing application/json

// Routes
const routes = require('./routes/indexRoutes');
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});