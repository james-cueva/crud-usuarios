// models/usuario.js

/**
 * Modelo de datos para "Usuario"
 * Este archivo define el esquema de un usuario usando Mongoose.
 * 
 * Campos:
 * - nombre: cadena de texto, obligatorio, mínimo 3 caracteres
 * - edad: número, obligatorio, entre 1 y 120
 */

const mongoose = require('mongoose');

// Definición del esquema para los documentos de tipo Usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,                           // Debe ser una cadena de texto
    required: [true, 'El nombre es obligatorio'], // Campo obligatorio con mensaje personalizado
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'] // Validación de longitud mínima
  },
  edad: {
    type: Number,                          // Debe ser un número
    required: [true, 'La edad es obligatoria'], // Campo obligatorio con mensaje personalizado
    min: [1, 'La edad mínima es 1'],       // Edad mínima permitida
    max: [120, 'La edad máxima es 120']    // Edad máxima permitida
  }
});

// Se crea el modelo "Usuario" a partir del esquema definido
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Se exporta el modelo para usarlo en otras partes del proyecto
module.exports = Usuario;
