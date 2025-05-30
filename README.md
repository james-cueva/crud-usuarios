# Mi API de Usuarios

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **MongoDB (Mongoose)**.  
Permite realizar operaciones CRUD sobre una colección de usuarios.

Incluye también un **frontend simple** con HTML, CSS y JS para consumir la API.

---

## 📁 Estructura del Proyecto

```bash
crud-usuarios/
├── backend/
│   ├── config/
│   │   └── db.js                # Conexión a la base de datos MongoDB usando Mongoose
│   ├── controllers/
│   │   └── usuarioController.js # Lógica de negocio de usuarios (CRUD)
│   ├── models/
│   │   └── usuario.js           # Esquema y modelo de Mongoose para usuarios
│   ├── routes/
│   │   └── usuarioRoutes.js     # Rutas HTTP para realizar operaciones CRUD sobre los "usuarios"
│   ├── .env                     # Variables de entorno (NO subir al repositorio)
│   ├── .gitignore               # Ignora archivos como node_modules y .env
│   ├── index.js                 # Punto de entrada del backend
├── frontend/
│   ├── index.html               # Interfaz de usuario principal
│   ├── styles.css               # Estilos CSS del frontend
├── package-lock.json            # Versión exacta de dependencias instaladas
├── package.json                 # Dependencias y scripts del proyecto 
├── README.md                    # Documentación del proyecto
```

---

## Tecnologías Usadas

- **Node.js**
- **Express**
- **MongoDB Atlas** (Base de datos en la nube)
- **Mongoose** (ODM para MongoDB)
- **HTML, CSS y JavaScript** para el frontend
- **Git & GitHub** para control de versiones y despliegue

---

## Cómo ejecutar el proyecto localmente

### 1. Clona el repositorio

Abre tu terminal y ejecuta:

```bash
git clone https://github.com/james-cueva/crud-usuarios.git
```
Esto descargará el proyecto en una carpeta llamada crud-usuarios.

### 2. Entra a la carpeta del proyecto

```bash
cd crud-usuarios
```

### 3. Ejecuta el backend

Ve a la carpeta del backend e instala las dependencias:

```bash
cd backend
npm install
```
### 4. Configura la conexión a MongoDB

Antes de iniciar el servidor, asegúrate de tener una base de datos MongoDB accesible. Puedes hacerlo de dos maneras:

Opción 1: Usar MongoDB Atlas (recomendado)

1. Crea una cuenta gratuita en https://www.mongodb.com/cloud/atlas.
2. Crea un clúster y una base de datos.
3. Obtén tu cadena de conexión (Connection String), que se verá algo así:

```bash
mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/mi-db?retryWrites=true&w=majority
```

4. Crea un archivo llamado .env dentro de la carpeta backend/ y agrega esta línea:

```bash
MONGO_URI=tu-cadena-de-conexion-aqui
PORT=tu-puerto-aqui
```

Reemplaza tu-cadena-de-conexion-aqui con tu cadena real, sin comillas.

Opción 2: Usar MongoDB local

Si tienes MongoDB instalado localmente:

1. Asegúrate de que el servicio esté corriendo.
2. En tu archivo .env, agrega:

```bash
MONGO_URI=mongodb://localhost:27017/mi-db
```

Reemplaza mi-db por el nombre de tu base de datos.

### 5. Inicia el servidor:

```bash
npm start
```

### 6. Abre el frontend

Solo abre el archivo `frontend/index.html` en tu navegador.

---

## Endpoints de la API

| Método | Ruta           | Descripción                  |
|--------|----------------|------------------------------|
| GET    | /usuarios      | Obtener todos los usuarios   |
| POST   | /usuarios      | Crear un nuevo usuario       |
| PUT    | /usuarios/:id  | Actualizar un usuario por ID |
| DELETE | /usuarios/:id  | Eliminar un usuario por ID   |

---

## Despliegue

### Backend en Render

1. Crea una cuenta en [Render](https://render.com).
2. Sube tu proyecto a un repositorio en GitHub.
3. En Render, crea un nuevo servicio "Web Service".
4. Conecta tu cuenta de GitHub y selecciona el repositorio del proyecto.
5. Cuando Render te pida el campo "Root Directory", déjalo vacío puesto que todos los archivos del backend están en la raíz del repositorio listos para ser ejecutados.
6. Render instalará tus dependencias y levantará tu servidor.

### Frontend en Netlify o Vercel

1. Entra a [Netlify](https://netlify.com) o [Vercel](https://vercel.com) y crea una cuenta (si no tienes una).
2. Conecta tu cuenta de GitHub y selecciona el repositorio de tu proyecto.
3. En la configuración del despliegue, selecciona la carpeta `frontend/` como directorio raíz del proyecto. 
4. El frontend se desplegará automáticamente.

---

## Características

- Separación clara de responsabilidades con el patrón MVC
- Validaciones de datos usando Mongoose
- Estructura escalable y organizada
- Preparado para producción y despliegue

---

## Comandos útiles

- `npm install` – Instala todas las dependencias del proyecto.
- `node index.js` – Inicia el servidor manualmente.
- `npx nodemon index.js` – Inicia el servidor con recarga automática al detectar cambios (requiere tener `nodemon` instalado).

---

## .gitignore

El proyecto incluye un archivo `.gitignore`, el cual está configurado para excluir archivos y carpetas que no deben subirse al repositorio, ya sea por tamaño, seguridad o porque se generan automáticamente:

```
node_modules/
.env
```

node_modules/: Contiene todas las dependencias instaladas por npm. Esta carpeta no debe subirse, ya que puede regenerarse con npm install.

.env: Archivo que guarda variables de entorno sensibles, como cadenas de conexión y claves privadas. Nunca debe compartirse públicamente.

---

## Autor

Desarrollado por **James Cueva**  
💼 Portafolio: próximamente  
📧 Email: james.live.2025@gmail.com

---

## Licencia

Este proyecto está bajo la licencia **MIT**, lo que significa que puedes usar, modificar y distribuir el código con libertad, siempre dando crédito al autor original.

