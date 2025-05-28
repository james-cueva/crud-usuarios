/* controllers
   En este módulo se encuentran los controllers(controladores).
   En el patrón de diseño MVC (Modelo - Vista - Controlador),
   el controlador es el que:
   Recibe las solicitudes (requests) del usuario.
   Procesa los datos (a veces usando modelos).
   Envía las respuestas (responses) al cliente.
   ¿Qué hace exactamente un controlador?
   Un controlador en Node.js/Express es una función (o grupo de funciones)
   que maneja la lógica detrás de cada acción
   que se puede hacer con un recurso, como:
   | Acción     | Ruta            | Método HTTP | Qué hace el controlador    |
   | ---------- | --------------- | ----------- | -------------------------- |
   | Crear      | `/usuarios`     | `POST`      | Crear un nuevo usuario     |
   | Leer       | `/usuarios`     | `GET`       | Obtener todos los usuarios |
   | Actualizar | `/usuarios/:id` | `PUT`       | Actualizar usuario por ID  |
   | Eliminar   | `/usuarios/:id` | `DELETE`    | Eliminar usuario por ID    |
   Estas funciones están en archivos como usuarioController.js,
   y se agrupan en la carpeta controllers por organización y mantenibilidad.
*/

/* Importar el modelo Usuario */
const Usuario = require('../models/usuario');

/* Exportar la función crear usuario
   
   Esta parte:
   
   exports.crearUsuario = async (req, res) => {

   Está exportando una función llamada crearUsuario desde un archivo
   (en este caso, usuarioController.js)
   para que pueda ser usada en otras partes del proyecto,
   como por ejemplo en tus rutas.

   ¿Qué significa exports?

   exports es un objeto especial en Node.js.
   Sirve para hacer que funciones, objetos o variables
   estén disponibles fuera del archivo actual.
   Es parte del sistema de módulos de Node.js.

   Sistema de módulos de Node.js

   ¿Qué es un módulo?

   En Node.js, un módulo es cualquier archivo JavaScript
   que contiene código que puede exportar (dar acceso a otros archivos)
   o importar (traer desde otros archivos) funcionalidades.

   ¿Para qué sirve?

   El sistema de módulos permite que puedas:

   Dividir tu aplicación en archivos más pequeños y organizados.
   Reutilizar código en diferentes partes del proyecto.
   Separar responsabilidades: controladores, modelos, rutas, etc.

   ¿Qué es el "sistema de módulos"?

   El sistema de módulos de Node.js es el mecanismo que permite
   importar y exportar código entre archivos.

*/
exports.crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body); // Crea un nuevo documento con los datos recibidos
    const resultado = await nuevoUsuario.save(); // Guarda en MongoDB
    /* Devuelve el usuario creado

       res

       Es el objeto de respuesta proporcionado por Express.
       Lo usas para responder al cliente que hizo la petición HTTP.

       .status(201)

       ¿Qué es un código de estado HTTP?

       Cuando un cliente (por ejemplo, tu navegador o Thunder Client)
       hace una petición HTTP a un servidor (como tu API en Node.js),
       el servidor siempre responde con un número especial
       llamado código de estado.
       Ese número indica el resultado de la operación.
       Es parte de cómo funciona el protocolo HTTP
       (el lenguaje que usan los navegadores y servidores para comunicarse).

       ¿Qué significa configurar el código de estado?

       Cuando tú haces esto en tu código: res.status(201)
       Estás diciéndole a Express (y al navegador o cliente
       que recibe la respuesta):
       “✅ Todo bien. El recurso se creó correctamente. Código 201.”
       Es decir, estás especificando manualmente qué número de estado
       (como 200, 201, 400...) devolverá el servidor
       para que el cliente entienda qué pasó con su petición.
       
       Ejemplos de códigos de estado comunes

       | Código | Significado           | Cuándo se usa                                 |
       | ------ | --------------------- | --------------------------------------------- |
       | 200    | OK                    | Todo salió bien (respuesta normal)            |
       | 201    | Created               | Algo nuevo se creó (por ejemplo, un usuario)  |
       | 400    | Bad Request           | El cliente envió datos inválidos              |
       | 401    | Unauthorized          | No está autorizado (falta login, por ejemplo) |
       | 404    | Not Found             | No se encontró lo solicitado                  |
       | 500    | Internal Server Error | El servidor falló por un error interno        |

       .json(resultado)

       Envía una respuesta en formato JSON al cliente.
       resultado contiene el nuevo usuario que fue guardado en la base de datos.

    */
    res.status(201).json(resultado);
    // Manejo de errores de validación
  } catch (err) {
    // #region Comprueba si el error fue causado por una validación de Mongoose. 
               /* err.name devuelve el tipo de error. 
                  Estructura típica de err (cuando es ValidationError de Mongoose):

                  {
                    name: 'ValidationError',    // Tipo de error
                    message: 'Usuario validation failed: nombre: El nombre es obligatorio, edad: La edad mínima es 1',
                    errors: {
                      nombre: {
                        message: 'El nombre es obligatorio',
                        name: 'ValidatorError',
                        kind: 'required',
                        path: 'nombre',
                        value: ''
                      },
                      edad: {
                        message: 'La edad mínima es 1',
                        name: 'ValidatorError',
                        kind: 'min',
                        path: 'edad',
                        value: 0
                      }
                    },
                    _message: 'Usuario validation failed'
                 }

                  Cuando se produce un error por no cumplir las reglas del modelo
                  (como edad mínima, campo requerido, etc.),
                  Mongoose lo clasifica como "ValidationError". 
               */        
    // #endregion    
    if (err.name === 'ValidationError') {
      /* Se extrae los mensajes de error según los errores de validación

         err.errors tendrá esta forma:
         {
            nombre: {
              message: "El nombre debe tener al menos 3 caracteres",
              name: "ValidatorError",
              kind: "minlength",
              path: "nombre",
              value: ""
            },
            edad: {
              message: "La edad mínima es 1",
              name: "ValidatorError",
              kind: "min",
              path: "edad",
              value: 0
            }
          }
          
          Cada propiedad (como nombre, edad) es un subobjeto
          con información sobre qué salió mal:

          message: El mensaje que escribiste en el esquema
          ('El nombre debe tener al menos 3 caracteres').
          name: Tipo de error (ValidatorError).
          kind: Qué tipo de validación falló (minlength, min, etc.).
          path: El nombre del campo (nombre, edad).
          value: El valor que causó el error ("", 0, etc.).

          Paso a paso

          1. Object.values(err.errors)

          Esto convierte el objeto en un array
          con los valores (sin las claves). El resultado sería:

          [
            {
              message: 'El nombre debe tener al menos 3 caracteres',
              name: 'ValidatorError',
              kind: 'minlength',
              path: 'nombre',
              value: 'Jo'
            },
            {
              message: 'La edad mínima es 1',
              name: 'ValidatorError',
              kind: 'min',
              path: 'edad',
              value: 0
            }
          ]

          2. .map(e => e.message)

             Esto recorre cada uno de los elementos del array anterior (e)
             y extrae la propiedad message de cada uno. El resultado sería:

             [
                'El nombre debe tener al menos 3 caracteres',
                'La edad mínima es 1'
              ]

          Supuesto: Error solo en nombre

          🚫 Petición con error:

          Supón que se intenta enviar un usuario con estos datos:

          {
            "nombre": "Jo",   // Solo 2 letras (mínimo requerido es 3)
            "edad": 25        // Edad correcta
          }
          
          ❌ Mongoose detecta un error solo en nombre

          Entonces, el objeto err.errors generado por Mongoose sería:

          {
            nombre: {
              message: 'El nombre debe tener al menos 3 caracteres',
              name: 'ValidatorError',
              kind: 'minlength',
              path: 'nombre',
              value: 'Jo'
            }
          }
          
          Solo aparece el campo nombre porque la edad sí pasó la validación.

      */
      const mensajes = Object.values(err.errors).map(e => e.message);
      /* Respuesta al cliente con estado 400 y el mensaje de error
         
         Estado 400:
         El cliente envió datos inválidos
         
         .json(...)

         Estás enviando la respuesta en formato JSON
         (muy común en APIs modernas).
         Este método:
         Convierte el objeto que le pases a JSON automáticamente.
         Lo envía al cliente como respuesta HTTP.

         { error: mensajes.join(', ') }

         Este es el objeto que se convierte en JSON.

          mensajes:

          ['El nombre debe tener al menos 3 caracteres', 'La edad mínima es 1']

          ¿Qué hace .join(', ')?

          Convierte ese array en un solo string separado por comas:

          "El nombre debe tener al menos 3 caracteres, La edad mínima es 1"

          Resultado final:

          Entonces { error: ... } se convierte en:

          {
            "error": "El nombre debe tener al menos 3 caracteres, La edad mínima es 1"
          }

          Esto es lo que ve el cliente (Thunder Client, el navegador,
          o el frontend React, por ejemplo).

      */
      res.status(400).json({ error: mensajes.join(', ') });
    } else {
      /* Respuesta al cliente con estado 500 y mensaje de error
         
         Estado 500: El servidor falló por un error interno

         .json({ error: 'Error del servidor' })

         Se envía al cliente en formato JSON, lo siguiente:

         { "error": 'Error del servidor' }

      */
      res.status(500).json({ error: 'Error del servidor' });
    }
  }
};

/* Exportar la función obtener usuarios */
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // Consulta todos los usuarios
    res.json(usuarios); // Devuelve como JSON
    // Manejo de errores
  } catch (err) {
    // Se envía estado 500 y el mensaje de error
    res.status(500).json({ error: err.message });
  }
};

/* Exportar la función actualizarUsuario */
exports.actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id, // ID del usuario
      req.body,      // Nuevos datos (nombre, edad)
      { new: true }  // Devuelve el documento actualizado
    ); // Actualiza usuario
    /* Se le envía al cliente los datos actualizados del usuario
       Se convierte los datos actualizados del usuario a formato JSON
       y se le envía al cliente 
    */
    res.json(usuarioActualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* Exportar la función eliminarUsuario */
exports.eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id); // Borra el documento
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
