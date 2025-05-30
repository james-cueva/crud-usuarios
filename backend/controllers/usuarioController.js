// controllers/usuarioController.js

// Importa el modelo Usuario de Mongoose
const Usuario = require('../models/usuario');

/**
 * Crear un nuevo usuario en la base de datos.
 * Método: POST
 * Ruta: /usuarios
 */
exports.crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body); // Crea un nuevo documento con los datos del body
    const resultado = await nuevoUsuario.save(); // Guarda el usuario en MongoDB
    res.status(201).json(resultado); // Responde con el usuario creado y estado 201
  } catch (err) {
    if (err.name === 'ValidationError') {
      // Si hay errores de validación, se recopilan los mensajes y se devuelven con estado 400
      const mensajes = Object.values(err.errors).map(e => e.message);
      res.status(400).json({ error: mensajes.join(', ') });
    } else {
      // Error genérico del servidor
      res.status(500).json({ error: 'Error del servidor' });
    }
  }
};

/**
 * Obtener todos los usuarios registrados.
 * Método: GET
 * Ruta: /usuarios
 */
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // Consulta todos los usuarios en MongoDB
    res.json(usuarios); // Responde con un arreglo de usuarios
  } catch (err) {
    // Error al obtener usuarios
    res.status(500).json({ error: err.message });
  }
};

/**
 * Actualizar un usuario por su ID.
 * Método: PUT
 * Ruta: /usuarios/:id
 */
exports.actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,   // ID del usuario desde la URL
      req.body,        // Nuevos datos del usuario
      { new: true }    // Devuelve el documento actualizado
    );
    res.json(usuarioActualizado); // Responde con el usuario actualizado
  } catch (err) {
    // Error en la actualización
    res.status(400).json({ error: err.message });
  }
};

/**
 * Eliminar un usuario por su ID.
 * Método: DELETE
 * Ruta: /usuarios/:id
 */
exports.eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id); // Elimina el usuario
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (err) {
    // Error al eliminar usuario
    res.status(400).json({ error: err.message });
  }
};
