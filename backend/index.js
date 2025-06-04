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

// Importa el módulo Express, que es el framework principal para construir el servidor web.
const express = require('express');

// Importa CORS, un middleware que permite que el frontend (incluso desde otro dominio)
/// pueda hacer peticiones al backend (controla las políticas de acceso entre orígenes).
const cors = require('cors');

// Importa 'path' para manejar y transformar rutas de archivos y directorios del sistema.
const path = require('path');

// Importa la función personalizada para conectar a la base de datos MongoDB usando Mongoose.
const conectarDB = require('./config/db');

// Crea una instancia de la aplicación de Express.
const app = express();

// Define el puerto en el que se ejecutará el servidor. Si está definido en una variable de entorno (como en Render), lo usa; si no, por defecto usa el 3000.
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
conectarDB();

// Middlewares
app.use(cors()); // Habilita CORS para permitir peticiones desde otros dominios
app.use(express.json()); // Permite procesar datos en formato JSON
app.use(express.static(path.join(__dirname, '../frontend'))); // Sirve archivos estáticos del frontend

// Rutas
// Importa las rutas relacionadas con la entidad "usuario", las cuales están definidas en el archivo correspondiente.
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/usuarios', usuarioRoutes); // Prefijo /usuarios para todas las rutas del recurso usuario

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});

