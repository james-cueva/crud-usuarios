/* models 
   Modelo = Model
   Un modelo en Mongoose representa
   la estructura de una colección en tu base de datos.
   ¿Qué contiene la carpeta models?
   La carpeta models guarda todos los modelos Mongoose,
   es decir, los archivos donde defines:
   El esquema (schema) del documento.
   El modelo (model) basado en ese esquema.
   Y los exportas para que se puedan usar en los controladores y rutas.
*/

/* Importa Mongoose para trabajar con MongoDB

  Se instala con:
  npm install mongoose

  **Mongoose** (ODM para MongoDB)

  En el contexto de Mongoose y MongoDB,
  ODM significa Object Document Mapper
  (en español, Mapeador de Documentos a Objetos).

  ¿Qué hace un ODM?

  Un ODM es similar a un
  ORM (Object Relational Mapper, en español Mapeador relacional de objetos)
  usado en bases de datos SQL, pero está diseñado
  para bases de datos NoSQL como MongoDB,
  que trabajan con documentos en lugar de filas y tablas.

  Funciones principales de un ODM como Mongoose:

  1. Modelado de datos: Te permite definir esquemas (schemas) para los documentos.
     Por ejemplo, puedes definir qué campos tiene un documento,
     qué tipo de datos deben tener y si son obligatorios.

  2. Validación: Verifica que los datos cumplan con las reglas del esquema
     antes de guardarlos.

  3. Consultas: Proporciona una API más amigable para hacer operaciones
     como encontrar, actualizar o eliminar documentos.

  4. Middlewares: Puedes usar funciones que se ejecutan automáticamente
     antes o después de ciertas operaciones, como save, find, update, etc.

  5. Hooks y métodos personalizados: Puedes definir métodos
     para usar en los documentos, o funciones que se ejecuten
     en momentos específicos del ciclo de vida de un documento.    

     Aquí, mongoose actúa como un ODM al permitirte trabajar
     con objetos JavaScript, que luego se guardan como documentos en MongoDB.

*/
const mongoose = require('mongoose');

/* Definir el esquema del documento "Usuario"
   El esquema es como una plantilla que dice
   qué campos tendrá cada usuario en la base de datos
*/
const usuarioSchema = new mongoose.Schema({
  // 🧍 Campo: nombre del usuario
  nombre: {
    type: String, // Debe ser una cadena de texto
    required: [true, 'El nombre es obligatorio'], // El campo es obligatorio
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'] // Mínimo 3 caracteres
  },
  // 🎂 Campo: edad del usuario
  edad: {
    type: Number, // Debe ser un número
    required: [true, 'La edad es obligatoria'], // El campo es obligatorio
    min: [1, 'La edad mínima es 1'], // Valor mínimo permitido
    max: [120, 'La edad máxima es 120'] // Valor máximo permitido
  }
});

/* Creamos el modelo "Usuario" a partir del esquema definido
   Este modelo es una clase que representa la colección "usuarios"
   en la base de datos MongoDB.
*/
const Usuario = mongoose.model('Usuario', usuarioSchema);

/* Exportar el modelo para poder usarlo en otras partes del proyecto */
module.exports = Usuario;
