/* Patrón del proyecto
   Patrón de diseño: MVC (Modelo - Vista - Controlador)
   Aunque en este proyecto no se tiene una "vista" (porque es una API REST),
   se está usando una versión adaptada de MVC,
   muy común en el desarrollo de backends con Node.js + Express.

   ¿Qué es una API REST?

   Una API REST (o RESTful API) es una interfaz que permite
   que diferentes aplicaciones (como un frontend y un backend)
   se comuniquen a través de internet, usando el protocolo HTTP.

   Características principales de una API REST:

   Usa HTTP para comunicarse (como los navegadores).
   Utiliza las operaciones GET, POST, PUT, DELETE para trabajar con datos.
   Devuelve respuestas en formato JSON.
   No tiene interfaz visual (no muestra HTML, botones, colores, etc).

   ¿Cómo aplica eso al proyecto?

   En el proyecto se está creando una API REST con Node.js y Express porque:

   Porque se tiene rutas como estas:

   router.post('/', usuarioController.crearUsuario); // crea un usuario
   router.get('/', usuarioController.obtenerUsuarios); // obtiene todos los usuarios
   router.put('/:id', usuarioController.actualizarUsuario); // actualiza un usuario
   router.delete('/:id', usuarioController.eliminarUsuario); // elimina un usuario

   Estas rutas no muestran páginas web. Lo que hacen es:

   Recibir datos (como un nuevo usuario).
   Procesarlos con lógica del backend.
   Devolver respuestas JSON al cliente
   (puede ser Postman, Thunder Client, o un frontend con React, etc.).

   En el patrón MVC tradicional (como en frameworks como Laravel,
   Ruby on Rails o incluso Express con EJS),
   la V de Vista es la parte que muestra HTML al usuario.

   En el proyecto actual, no hay páginas HTML.
   Se está devolviendo cosas como esto:

   json

   {
    "nombre": "James",
    "edad": 25
   }

   Eso es una respuesta JSON, no una vista.

   Por lo tanto se está usando
   solo la parte Modelo y Controlador del patrón MVC.

   Patrón con diseño MVC

   🅼 Model (Modelo)

   Función:
   Representa los datos y las reglas de negocio.
   Se encarga de interactuar con la base de datos:
   guardar, leer, actualizar y eliminar datos.

   Las reglas de negocio son condiciones, restricciones o validaciones
   que definen cómo deben funcionar los datos en tu aplicación,
   según lo que necesitas lograr.

   No son reglas técnicas, sino lógicas del negocio o proyecto.

   🅅 View (Vista)
   Función:
   Es la parte que el usuario ve e interactúa: HTML, CSS, JS.
   Muestra los datos que vienen del modelo y se actualiza
   según las acciones del usuario.

  🅲 Controller (Controlador)
  Función:
  Actúa como un intermediario entre el Modelo (datos) y la Vista (interfaz).
  Recibe las solicitudes del cliente, llama al modelo si es necesario,
  y devuelve una respuesta.

  ✅ ¿Cómo se conecta una app frontend con tu API REST?

  Tu frontend puede estar hecho en muchas tecnologías como:

  HTML + JavaScript puro (vanilla JS)
  React
  Vue
  Angular

  Y desde allí, puede consumir tu API usando fetch, axios, o similares.

*/
/* Node.js 
  Instalar Node.js y npm (gestor de paquetes)
  Ve a https://nodejs.org/
  Descarga la versión LTS.
  Verifica instalación:
  node -v
  npm -v
*/
/* Inicializa un proyecto:
mkdir mi-api (crea carpeta)
cd mi-api (ir a la ruta de la carpeta creada)
npm init -y (inicializa el proyecto)
*/
/* Proyecto en línea

   GitHub

   GitHub es una plataforma en línea donde puedes
   guardar, compartir y colaborar en proyectos de programación usando Git,
   que es un sistema de control de versiones.

   🧠 ¿Qué es Git?

   Antes de entender GitHub, es importante saber que Git
   es una herramienta que te permite:

   Guardar el historial de cambios de tus archivos
   (como si tomaras "fotos" de tu código).
   Volver atrás si cometes errores.
   Colaborar con otros sin pisarse el trabajo.

   Debes tener instalado Git en tu PC.
   Verifica con:
   git --version

   Debes tener una cuenta en GitHub.com.

   🔁 Paso 1: Inicializa Git en tu carpeta mi-api/

   Abre la terminal en la carpeta mi-api/ y ejecuta:

   git init

   Esto convierte tu carpeta en un repositorio Git local.

   📝 Paso 2: Crea un archivo .gitignore (si no lo tienes)

   Crea un archivo llamado .gitignore y añade esto dentro:

   node_modules
   .env

   Esto evita que Git suba las dependencias pesadas y tus variables sensibles.

   ✅ Paso 3: Añade y haz commit de tus archivos

   git add .
   git commit -m "Subiendo proyecto"

   🧠 ¿Qué es el comando git add?

   Cuando estás trabajando en un proyecto con Git, cada vez que:

   📝 Creas un archivo nuevo (por ejemplo: nuevo.html)
   ✏️ Modificas un archivo existente (como index.js)
   🗑️ Eliminas un archivo

    Git sí detecta que hubo un cambio, pero no lo guarda automáticamente
    como una versión oficial del proyecto.

    Git simplemente dice:

    "Ok, noté que cambiaste algo... pero hasta que tú
    no me digas explícitamente que lo guarde, no lo guardaré."

    🎯 ¿Entonces qué hace Git con los cambios?

    Git espera instrucciones tuyas. Tú decides:

    1. Qué archivos quieres guardar (con git add)

    2. Cuándo quieres guardarlos oficialmente (con git commit)

    📌 ¿Qué es el "área de preparación" (Staging Area)?

    Imagina que estás haciendo un trabajo y tienes varios documentos.
    Antes de entregarlos al profesor (o jefe),
    eliges cuáles ya están listos para entregar.
    Los pones en una carpeta llamada "por entregar".

    Esa carpeta es lo que Git llama "staging area".
    Solo lo que pongas ahí, será guardado oficialmente con el siguiente commit.

    ✅ ¿Qué es un commit en Git?

    Un commit es como una foto oficial del estado de tu proyecto
    en un momento determinado.
    
    Es una versión guardada de los archivos
    que tú mismo seleccionaste previamente con git add.

    🎯 ¿Qué contiene un commit?

    Un commit guarda:

    El contenido de los archivos que preparaste (con git add)
    La fecha y hora
    Tu nombre y correo como autor
    Un mensaje explicando qué hiciste
    (por ejemplo: "Agregando la ruta para crear usuarios")

    🔄 ¿Y si hago más cambios después?

    Esos cambios no quedan registrados en Git automáticamente.
    Tendrías que repetir el ciclo:

    1. git add archivo-cambiado.js
       Esto representa cualquier archivo que tú hayas modificado,
       agregado o incluso eliminado en tu proyecto
       después de hacer un commit anterior.

    2. git commit -m "Explicación del cambio"
       Hace un "commit" (una captura de los archivos en la zona de preparación),
       y el -m significa "message" (mensaje),
       seguido de una descripción corta pero clara
       del cambio que estás guardando.

    🧠 ¿Por qué es importante ese mensaje?
    
    Porque cada commit que hagas forma una historia del proyecto.
    Es como un historial de cambios.
    
    Así vas creando una historia de versiones con sentido.

    ⚠️ Este paso es imprescindible. Git no crea ninguna rama (como main)
        si no haces un commit.

    🧠 ¿Qué es una rama (branch) en Git?

        Una rama en Git es como una línea de tiempo del proyecto
        donde tú puedes hacer cambios sin afectar otras versiones del código.

        🔹 La rama principal por defecto en la mayoría de los proyectos
        se llama main (antes era master).

        Es como si tuvieras varias versiones de un documento en paralelo.
        Puedes trabajar en una copia (rama) sin alterar la versión original
        hasta que decidas combinar los cambios.

        🎬 Ejemplo práctico:

        Supón que tienes tu proyecto web y estás en la rama principal llamada main.
        Esa rama tiene 5 commits:

        main:  A → B → C → D → E

        Ahora decides probar una nueva funcionalidad
        sin arruinar lo que ya tienes. Entonces creas una nueva rama:

        git checkout -b nueva-funcionalidad

        Esto crea una copia exacta de la rama main en ese punto (E),
        y ahí puedes empezar a trabajar:

        nueva-funcionalidad:  E → F → G

        Mientras tanto, la rama main sigue intacta:

        main:                A → B → C → D → E
        nueva-funcionalidad:                        → F → G

        Por lo tanto su historial completo sería:

        nueva-funcionalidad: A → B → C → D → E → F → G

        Así puedes:

        ✅ Probar ideas
        ✅ Corregir errores
        ✅ Hacer nuevas versiones

        Sin afectar la versión principal.

    ☁️ Paso 4: Crea un repositorio en GitHub

    1. Ve a https://github.com.
    2. Haz clic en "New repository".
    3. Ponle un nombre (por ejemplo: backend-miapp).
    4. No marques ninguna opción de inicialización (README, gitignore, etc.).
    5. Crea el repositorio.

    🔗 Paso 5: Conecta tu carpeta con GitHub

    Copia la URL del repositorio, por ejemplo:

    https://github.com/tu-usuario/backend-miapp.git

    Y en tu terminal, en la carpeta mi-api/ escribe:
    
    terminal
    git remote add origin https://github.com/tu-usuario/backend-miapp.git

    Esto renombra la rama actual (probablemente master) a main,
    que es lo que GitHub espera por defecto.
    
    terminal
    git branch -M main

    Push al repositorio en GitHub
    
    terminal
    git push -u origin main

    En CMD, "push" se utiliza en el contexto de Git
    para subir los cambios locales de un repositorio de Git
    a un repositorio remoto. Es decir,
    "push" empuja o envía tus actualizaciones locales (cambios, commits)
    al repositorio en línea, como GitHub,
    para que otros puedan verlos y trabajar con ellos. 

    🎉 ¡Listo! Ahora tu backend ya está en GitHub.
    Puedes ir al repositorio y ver todos tus archivos.

   🌐 ¿Y qué es GitHub?
      GitHub es un servicio en la nube donde puedes subir tus proyectos Git para:

      ✅ Guardarlos de forma segura en línea
      ✅ Compartirlos con otros programadores
      ✅ Trabajar en equipo desde distintas computadoras
      ✅ Mostrar tu trabajo (como portafolio)
      ✅ Conectar con empresas y la comunidad open source

   🛠️ ¿Para qué se usa GitHub?

      Subir proyectos personales o profesionales
      Contribuir a proyectos de código abierto
      Hacer seguimiento de bugs o mejoras (issues)
      Revisar cambios y colaborar con otros (pull requests)
      Desplegar apps directamente desde GitHub (con Vercel, Netlify, etc.)

   📁 ¿Qué es un repositorio?

      Un repositorio en GitHub es como una carpeta online
      que contiene todo tu proyecto (archivos, historial, documentación, etc.).   

   🌐 ¿Qué es Render?

   Render es una plataforma en la nube que te permite desplegar (publicar)
   aplicaciones web, como tu backend hecho con Node.js,
   sin necesidad de configurar servidores manualmente.

   🧠 ¿Para qué sirve?
   
   Render te permite subir tu app a internet de forma fácil y gratuita,
   para que otras personas (clientes, empresas, etc.)
   puedan acceder a ella con una URL pública, como:

   https://miapp-backend.onrender.com

   Estructura del proyecto

   mi-api/
   ├── backend/        
   │   ├── config/
   │   │	  ├─ db.js
   │   ├── controllers/
   │   │     ├─ usuarioController.js
   │   ├── models/
   │   │     ├─ usuario.js
   │   ├── routes/
   │   │     ├─ usuarioRoutes.js
   │   ├── index.js
   ├── frontend/       
   │   ├── index.html
   │   ├── styles.css
   ├── node_modules/
   ├── package-lock.json
   ├── package.json

   Esa estructura está muy bien organizada para subirla a GitHub
   y luego desplegarla correctamente tanto en Render (para el backend)
   como en Netlify o Vercel (para el frontend).

   ✅ Cosas que están bien en tu estructura:

   1. Separación clara por carpetas

   backend/ → contiene todo tu código del servidor Node.js (Express, Mongoose, etc.).
   frontend/ → contiene los archivos HTML y CSS que forman la interfaz de usuario.

   2. Subida a GitHub

   Cuando subas el proyecto a GitHub:

   Sube toda la carpeta mi-api/, pero asegúrate de ignorar la carpeta
   node_modules/ con un archivo .gitignore (te explico abajo).

   GitHub almacenará todo tu proyecto y luego podrás:

   En Render → indicar que el backend está en backend/.
   En Netlify o Vercel → indicar que el frontend está en frontend/.

   🛑 Importante: Agrega un archivo .gitignore

   🧾 ¿Qué es .gitignore?

   Es un archivo especial que le dice a Git (el sistema de control de versiones)
   qué archivos o carpetas debe ignorar y no subir al repositorio de GitHub.

   Es decir, aunque existan en tu carpeta local,
   no se enviarán a GitHub si están listados en .gitignore.

   📦 Contenido típico del archivo .gitignore para tu proyecto:

   # Ignora la carpeta node_modules (archivos de dependencias de Node.js)
      node_modules/

   # Ignora el archivo .env (suele tener datos sensibles como contraseñas o URIs)
     .env
   
   🔹 node_modules/ – ¿Por qué ignorarlo?

      Es una carpeta muy pesada (puede tener cientos de MB).
      Contiene todos los paquetes instalados con npm,
      pero no necesitas subirlos porque cualquiera que clona tu proyecto
      solo tiene que ejecutar:

      npm install

      …y npm se encargará de instalar lo que esté listado en tu package.json.

      Subir node_modules/ haría tu repositorio muy lento, pesado
      e innecesariamente grande.

      🔹 .env – ¿Por qué ignorarlo?

      Este archivo se usa comúnmente para guardar datos confidenciales,
      por ejemplo:

      MONGO_URI=mongodb+srv://usuario:clave@servidor.mongodb.net/miapp
      API_KEY=12345ABC

      Subir .env a GitHub expondría tus contraseñas y claves privadas al mundo,
      lo cual puede ser un gran riesgo de seguridad.
      Por eso, debes evitar subirlo y agregarlo al .gitignore.

      ✅ ¿Cómo lo creo?

      1. En la raíz de tu proyecto (mi-api/),
      crea un archivo llamado .gitignore (sin extensión).

      2. Pega dentro:

      node_modules/
      .env

      3. Guarda.

      Git lo detectará automáticamente y no rastreará esos archivos/carpetas.

      Es altamente recomendable incluir un archivo README.md en el proyecto,
      especialmente si lo vas a subir a GitHub
      o compartirlo como parte de tu portafolio.

      ✅ ¿Qué es README.md?

      Es un archivo de texto escrito en Markdown (.md)
      que sirve como documentación principal del proyecto.
      Aparece automáticamente en la portada de tu repositorio en GitHub.

      💡 ¿Por qué deberías incluirlo?

      1. 🧭 Explica de qué trata tu proyecto
         Ayuda a otros (y a ti mismo en el futuro) a entender qué hace tu aplicación.

      2. ⚙️ Instrucciones de instalación y uso
         Guía a quien descargue tu proyecto para que pueda instalarlo y ejecutarlo sin problemas.

      3. 📦 Profesionalismo
         Da una imagen profesional de tu trabajo. Los reclutadores y empresas lo valoran.

*/

/* Importa el framework Express
  Importar el módulo express (función), no una clase en sentido clásico de JavaScript.
  Se instala con: npm install express
*/
/* 🔍 ¿Qué es npm?
      npm significa Node Package Manager (Administrador de paquetes de nodos), y es:
      🧰 El sistema de gestión de paquetes oficial de Node.js.
      🎯 ¿Para qué sirve npm?
      Sirve para:
      ✅ Instalar paquetes (librerías/módulos) como Express, Mongoose, Cors, etc.
      📦 Manejar dependencias de tu proyecto (todo lo que usas).
      🛠️ Ejecutar scripts personalizados, como iniciar el servidor o correr pruebas.
      📁 Crear y administrar tu proyecto con archivos como package.json.
         Cuando trabajas con Node.js, npm te ayuda a organizar todo tu proyecto a través de un archivo central: package.json.
         🔷 ¿Qué es package.json?
         Es un archivo de configuración que se crea automáticamente cuando inicias un proyecto con npm usando:
         npm init
         o más rápido:
         npm init -y
         📦 ¿Qué contiene package.json?
         Este archivo describe tu proyecto y sus dependencias. Aquí tienes un ejemplo típico:
         {
           "name": "mi-api",
           "version": "1.0.0",
           "description": "API con Express y MongoDB",
           "main": "index.js",
           "scripts": {
               "start": "node index.js"
            },
            "dependencies": {
              "express": "^4.18.2",
              "mongoose": "^7.6.1"
            }
          }
          🧠 ¿Qué hace cada parte?
          Campo	        ¿Qué indica?
          name	        El nombre de tu proyecto.
          version	      La versión del proyecto.
          description	  Descripción corta del proyecto.
          main	        El archivo principal de entrada (por ejemplo index.js).
          scripts	      Comandos que puedes correr con npm run (como npm start).
          dependencies	Las librerías que tu proyecto necesita para funcionar.
          📁 ¿Y cómo ayuda a "administrar el proyecto"?
          Porque gracias al package.json, puedes:
          Instalar automáticamente todos los paquetes del proyecto en otro lugar usando:
          npm install
          Compartir tu proyecto (por ejemplo, en GitHub) sin incluir toda la carpeta node_modules. Solo necesitas subir el package.json.
          Ejecutar comandos como:
          npm start
          Mantener todo documentado y ordenado.
          🚀 ¿Qué pasa si no tienes package.json?
          No puedes usar npm install correctamente, ni ejecutar scripts como npm start. Tu proyecto no estaría "configurado oficialmente" como un proyecto Node.js.
*/
const express = require('express');
/* Middleware para permitir solicitudes desde otros orígenes
   CORS
   Se instala con:
   npm install cors
*/
const cors = require('cors');
/* Importar la función que conecta a la BD */
const conectarDB = require('./config/db');
/* Módulo para manejar rutas
📌 ¿Qué es path?
    Es un módulo nativo de Node.js (no necesitas instalarlo).
    Sirve para manipular rutas de archivos y carpetas de manera segura y multiplataforma (funciona igual en Windows, Linux y macOS).

🧠 ¿Por qué es útil?
    Porque en Node.js las rutas pueden tener diferencias según el sistema operativo:
    Windows usa \ (por ejemplo: C:\mi-api\frontend)
    Linux/macOS usa / (por ejemplo: /home/usuario/mi-api/frontend)
    Con path.join(...), garantizas que se forme una ruta correcta para cualquier sistema.
*/
const path = require('path');

/* Aplicación de servidor
   Crea una instancia de la aplicación de Express
   Invocar(llamar) a esa función, lo que devuelve una instancia
   de una aplicación Express, es decir, un objeto que tiene todos
   los métodos y propiedades necesarios para manejar un servidor web.
   Llamada aplicación de servidor
*/
const app = express();

/* Puerto

   ¿Qué es un puerto?
    Un puerto es como una "puerta virtual" que permite
    que tu computadora (o servidor)
    pueda escuchar múltiples servicios al mismo tiempo,
    y cada uno a través de un puerto diferente.

   ¿Por qué es necesario?
    Porque una misma dirección IP puede tener varios programas
    o servicios funcionando al mismo tiempo,
    y se necesita una forma de distinguir a cuál programa
    se debe entregar cada conexión. 

   Ejemplo real:

   | Servicio        | Protocolo | Puerto | ¿Qué hace?                                               |
   | --------------- | --------- | ------ | -------------------------------------------------------- |
   | Servidor web    | HTTP      | 80     | Recibe peticiones de navegadores                         |
   | Servidor seguro | HTTPS     | 443    | Recibe peticiones cifradas                               |
   | Base de datos   | MongoDB   | 27017  | Recibe conexiones de apps que acceden a la base de datos |
   | API Node.js     | HTTP      | 3000   | Tu app backend personalizada                             |

   Cada "tipo de conexión de red" se refiere a:
    Diferente protocolo (HTTP, HTTPS, SSH, etc.)
    Diferente servicio (web, base de datos, correo)
    Diferente puerto de entrada

   Por lo tanto, la computadora puede manejar múltiples comunicaciones,
   separándolas por puerto.
*/
const PORT = 3000;

/* Conexión a la base de datos */
conectarDB();
/* Middleware
   En Node.js, el middleware se refiere a una función o conjunto de funciones
   que se ejecutan durante el ciclo de vida de una solicitud HTTP,
   generalmente en aplicaciones web desarrolladas con frameworks como Express.js.
   Estas funciones middleware se utilizan
   para manipular, filtrar, o manejar la solicitud
   antes de que llegue a la ruta final que devuelve una respuesta al cliente,
   o para procesar la respuesta antes de que se envíe al cliente.
*/ 
app.use(cors());
/* Middleware para que Express entienda datos JSON en las solicitudes */
app.use(express.json());
/* Hacer públicos los archivos del frontend
   Esto le dice a Express que sirva todos los archivos
   dentro de frontend como públicos
*/
app.use(express.static(path.join(__dirname, '../frontend')));

/* Rutas
   
  En esta línea:

  app.use('/usuarios', usuarioRoutes);

  app.use(...) conecta un grupo de rutas.

  El servidor esta corriendo en http://localhost:3000

  Por lo tanto '/' representa la raíz del servidor.

  Entonces en esta línea: app.use('/usuarios', usuarioRoutes);

  Todas las rutas definidas en usuarioRoutes
  estarán accesibles a partir de esta URL base":

  http://localhost:3000/usuarios

  ✅ La palabra 'usuarios' se añade tal cual la escribes.

*/
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/usuarios', usuarioRoutes);

/* Inicio del servidor
   Por defecto siempre empezará a correr desde localhost (la propia pc).
*/
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
