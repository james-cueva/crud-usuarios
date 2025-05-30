/**
 * @file db.js
 * @description Configura y establece la conexión a la base de datos MongoDB usando Mongoose.
 *              Carga las variables de entorno desde un archivo .env.
 *
 * Este archivo debe estar ubicado dentro de la carpeta 'backend/config/'.
 * Requiere que exista una variable de entorno llamada MONGODB_URI en el archivo .env.
 *
 * Ejemplo de uso:
 * const conectarDB = require('./config/db');
 * conectarDB();
 */

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

const mongoose = require('mongoose');

/**
 * Conecta la aplicación a MongoDB usando Mongoose.
 * Si la conexión falla, se muestra un mensaje de error y se detiene la ejecución del proceso.
 */
const conectarDB = async () => { 
  try {   
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
    process.exit(1); // Finaliza la aplicación si no puede conectarse
  }
};

module.exports = conectarDB;
