/* Importar el módulo Express */
const express = require('express');

/* Creación de un objeto router para definir rutas
   Router() es una función que viene con el módulo express.
   Crea un objeto router que te permite definir rutas
   de forma modular y ordenada.
   Es como una mini aplicación Express:
   puedes usar .get(), .post(), .put(), .delete(), middlewares, etc.,
   pero todo estará contenido en este router.

   ¿Por qué usar routers --> express.Router()?
   Porque permite:
   Separar las rutas por funcionalidad
   (por ejemplo: /usuarios, /productos, /auth, etc.).
   Mantener el archivo app.js (o index.js) limpio y ordenado.
   Reutilizar y escalar el código más fácilmente.
*/
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

/* Rutas 

   Qué significa '/' en este contexto

   En el archivo index.js se tiene esta línea:

   app.use('/usuarios', usuarioRoutes);

   Eso significa que todas las rutas que declares en usuarioRoutes.js
   estarán "colgando" de /usuarios.

   Si alguien hace una petición POST a /usuarios,
   se ejecutará la función crearUsuario.

   Si desde Postman, Thunder Client, o desde un formulario HTML haces:

   POST http://localhost:3000/usuarios

   Y en el cuerpo mandas esto:

   {
   "nombre": "Juan",
   "edad": 25
   }

   Tu app ejecutará la función crearUsuario,
   guardará ese usuario y responderá con el nuevo usuario en JSON.

   Endpoint

   Un endpoint es una URL completa que representa un punto de entrada a tu API.

   El endpoint para obtener los usuarios sería:

   GET http://localhost:3000/usuarios

*/
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuarios);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
