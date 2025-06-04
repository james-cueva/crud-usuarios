// routes/usuarioRoutes.js

/**
 * Rutas para el manejo de usuarios
 * 
 * Este archivo define las rutas HTTP relacionadas con las operaciones
 * CRUD para el recurso "Usuario". Utiliza un router de Express y 
 * delega la lógica a los controladores correspondientes.
 * 
 * Rutas:
 * - POST    /        → Crear un nuevo usuario
 * - GET     /        → Obtener todos los usuarios
 * - PUT     /:id     → Actualizar un usuario existente por ID
 * - DELETE  /:id     → Eliminar un usuario existente por ID
 */

// Importa el módulo Express, que es el framework que usamos para construir el backend.
const express = require('express');
// Crea una instancia del enrutador de Express.
// Este enrutador nos permite definir rutas específicas para los usuarios,
// separando la lógica del enrutamiento del archivo principal `index.js`.
const router = express.Router();

// Importa las funciones del controlador de usuario
const usuarioController = require('../controllers/usuarioController');

// Crear un nuevo usuario
router.post('/', usuarioController.crearUsuario);

// Obtener todos los usuarios
router.get('/', usuarioController.obtenerUsuarios);

// Actualizar un usuario por su ID
router.put('/:id', usuarioController.actualizarUsuario);

// Eliminar un usuario por su ID
router.delete('/:id', usuarioController.eliminarUsuario);

// Exporta el router para usarlo en index.js
module.exports = router;

