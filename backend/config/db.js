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

// Importa el módulo Mongoose, que es una biblioteca ODM (Object Data Modeling)
// para MongoDB. Permite interactuar con la base de datos utilizando objetos JavaScript.
const mongoose = require('mongoose');

/**
 * Función asíncrona para conectar la aplicación con MongoDB Atlas.
 * Utiliza la URI almacenada en las variables de entorno para establecer la conexión.
 *
 * Este tipo de función permite:
 * - Separar la lógica de conexión en un módulo reutilizable.
 * - Manejar errores de forma ordenada en caso de que la conexión falle.
 */
const conectarDB = async () => { 
  try {   
    // Intenta establecer la conexión con MongoDB usando la URI definida en el archivo .env.
    await mongoose.connect(process.env.MONGODB_URI);
    // Si la conexión es exitosa, muestra un mensaje en consola.
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    // Si ocurre un error al intentar conectarse, lo muestra en consola.
    console.error('❌ Error al conectar a MongoDB:', error);
    // Finaliza el proceso de la aplicación con un código de error.
    // Esto evita que el servidor siga corriendo sin estar conectado a la base de datos.
    process.exit(1);
  }
};

// Exporta la función para poder utilizarla desde otros archivos del proyecto,
// como el archivo principal `index.js`.
module.exports = conectarDB;
