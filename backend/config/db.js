/* Importa Mongoose para trabajar con MongoDB
   Se instala con:
   npm install mongoose
*/
const mongoose = require('mongoose');

/* Conexión con la BD
   Es una función asíncrona llamada conectarDB.
   Es asíncrona porque conectar a una base de datos
   es una operación que puede tardar, y usamos await.
*/
const conectarDB = async () => { 
/* Bloque try-catch para manejar errores*/
  try {   
    /* Intenta conectarse a tu base de datos en MongoDB Atlas usando la cadena de conexión (URI de conexión) */
    await mongoose.connect('mongodb+srv://JamesBD:J4m3sBD@james.jnabvqb.mongodb.net/miapp?retryWrites=true&w=majority&appName=James');
/*  Si se conecta correctamente, muestra en consola:
    ✅ Conectado a MongoDB Atlas.
*/
    console.log('✅ Conectado a MongoDB Atlas');
/*  Si ocurre un error, se muestra el mensaje de error en consola
    y process.exit(1) detiene la aplicación (útil para evitar que
    siga ejecutándose con errores de conexión).
*/
  } catch (error) {
/*  ¿Qué hace console.error()?
       console.error() es un método de Node.js (y JavaScript en general)
       que muestra mensajes de error en la consola.  
       * Es como console.log(), pero está pensada específicamente para errores.
       * Muestra los mensajes en color rojo
       * Internamente va por el canal stderr, no por el canal stdout.
           Cuando un programa (como uno hecho en Node.js) imprime algo
           en la consola, lo puede hacer a través de dos canales distintos:
           Canal	 Significado	                       Función principal
           stdout	 Standard Output (salida estándar)	 Para mostrar información "normal" del programa.
           stderr	 Standard Error (salida de errores)	 Para mostrar mensajes de error o advertencia.
           ¿Cómo los usa Node.js?
           En Node.js:
           console.log() → escribe en stdout.
           console.error() → escribe en stderr.
           Ejemplo técnico real:
           Supón que tienes este código:
           console.log("Todo está funcionando");
           console.error("Hubo un error inesperado");   
           Al ejecutar este script, internamente:
           "Todo está funcionando" va por el canal stdout.
           "Hubo un error inesperado" va por el canal stderr.
           🖥️ ¿Por qué es útil separar stdout y stderr?
           Separar los canales tiene ventajas prácticas:
           1. Filtrar o redirigir mensajes por separado:
              Puedes guardar los logs normales en un archivo, y los errores en otro.
               ¿Qué significa "logs"?
               Logs (en español: registros) son mensajes de texto que genera un programa
               para indicar lo que está pasando mientras se ejecuta.
           2. Automatización y depuración más ordenada:
              Herramientas de despliegue y monitoreo como Docker, PM2 o Jenkins
              usan esa separación para reportar errores o alertas.
           3. Resalta visualmente errores:
              Muchas terminales colorean stderr en rojo automáticamente.

              error
              
              Imprimirá en consola los detalles del error ocurrido

*/
    console.error('❌ Error al conectar a MongoDB:', error);
/*  ¿Qué es process.exit(1)?
    En Node.js, process es un objeto global que ya está disponible
    sin necesidad de importar nada.
    Representa el programa que se está ejecutando en ese momento.
    Significa que el objeto process:
    1. Contiene información sobre el entorno donde se está ejecutando tu aplicación (por ejemplo el Sistema operativo).
    2. Controla aspectos del programa mientras corre (por ejemplo, salir del programa,
    leer argumentos, leer entradas del teclado, etc.).
    3. Es la interfaz entre tu código y el sistema operativo
       que lo está ejecutando.
       process es como el puente o intermediario que le permite a tu programa 
       interactuar con el sistema operativo mientras se ejecuta.
       ¿Qué cosas del sistema operativo puedes controlar con process?
       1. Salir del programa → process.exit()
       2. Leer argumentos
       3. Leer variables de entorno
       4. Leer desde el teclado o desde archivos de entrada → process.stdin
          Es la forma en que el sistema operativo le pasa datos al programa.
       5. Escribir en la consola (terminal) → process.stdout y process.stderr
          Así tu programa puede enviar texto al sistema operativo para mostrarlo al usuario.
    El método exit() permite salir del programa.
    process.exit([código]);
    El parámetro opcional código es un número entero
    que indica cómo terminó el proceso.
    0 → El proceso terminó correctamente (sin errores).
    Cualquier otro valor (como 1) → El proceso terminó con errores.
    ¿Qué significa process.exit(1) específicamente?
    Significa:
    Finaliza inmediatamente la ejecución del programa porque ocurrió un error.
    Lo usamos para:
    1. Evitar que la aplicación continúe ejecutándose sin conexióna la
       base de datos.
    2. Marcar que el proceso terminó de forma incorrecta por un 
       error importante (como no poder acceder a la base de datos).
    3. Permitir a otros procesos o herramientas
       (como un sistema de despliegue o Docker)
       detectar que la app falló al iniciar.
    ¿Y si no se usara process.exit(1)?
    Sin eso, la app seguiría funcionando, aunque no esté conectada a MongoDB,
    lo que podría causar fallos silenciosos o errores más adelante
    cuando intente acceder a datos.  
*/
    process.exit(1);
  }
};
// #region Exporta la función conectarDB
/* ¿Qué es module?
   module es un objeto especial de Node.js que representa el módulo actual
   (es decir, el archivo .js que estás escribiendo).
   Cada archivo de Node.js es tratado como un módulo independiente,
   y module te da información sobre ese módulo.
   Ejemplo:
   En este archivo db.js:
   console.log(module);
   Esto mostrará algo como:
   {
     id: '.',
     path: '/ruta/del/proyecto',
     exports: {},
     filename: '/ruta/del/proyecto/db.js',
     ...
   }
   Observa que hay una propiedad llamada exports.
   Esto nos lleva al siguiente punto.  
   ¿Qué es exports?
   exports es una propiedad del objeto module,
   que por defecto es un objeto vacío ({}).
   Puedes asignarle cualquier valor (función, objeto, clase, etc.)
   para compartirlo con otros archivos.
   ¿Y qué significa module.exports = conectarDB;?
   Estás diciendo: "Este módulo (archivo) exporta la función conectarDB".
   Cuando otro archivo use require('./db'),
   recibirá lo que se exportó con module.exports.
*/
// #endregion
module.exports = conectarDB;
