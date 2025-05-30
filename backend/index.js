// backend/index.js

/**
 * Archivo principal del servidor Express
 * 
 * Este archivo inicializa la aplicación backend:
 * - Conecta a la base de datos MongoDB
 * - Configura middlewares para CORS, JSON y archivos estáticos
 * - Define las rutas principales de la API
 * - Inicia el servidor en el puerto especificado
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const conectarDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
conectarDB();

// Middlewares
app.use(cors()); // Habilita CORS para permitir peticiones desde otros dominios
app.use(express.json()); // Permite procesar datos en formato JSON
app.use(express.static(path.join(__dirname, '../frontend'))); // Sirve archivos estáticos del frontend

// Rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/usuarios', usuarioRoutes); // Prefijo /usuarios para todas las rutas del recurso usuario

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});

