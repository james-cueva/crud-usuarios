# Mi API de Usuarios

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **MongoDB (Mongoose)**.  
Permite realizar operaciones CRUD sobre una colección de usuarios.

Incluye también un **frontend simple** con HTML, CSS y JS para consumir la API.

---

## 📁 Estructura del Proyecto

```bash
mi-api/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── usuarioController.js
│   ├── models/
│   │   └── usuario.js
│   ├── routes/
│   │   └── usuarioRoutes.js
│   └── index.js
├── frontend/
│   ├── index.html
│   ├── styles.css
├── .gitignore
├── package.json
├── README.md
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

```bash
git clone https://github.com/tu-usuario/mi-api.git
cd mi-api
```

### 2. Entra a la carpeta mi-api/ y ejecuta:

```bash
cd mi-api
npm install
```

### 3. Configura la conexión a la base de datos

Crea un archivo `.env` dentro de la carpeta `mi-api/` con el siguiente contenido:

```env
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/miapp
PORT=3000
```

Reemplaza `<usuario>`, `<password>` y `<cluster>` con tus datos reales de MongoDB Atlas.

### 4. Inicia el servidor

```bash
node index.js
# o si usas nodemon
npx nodemon index.js
```

### 5. Abre el frontend

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

1. Crea una cuenta en [Render](https://render.com)
2. Sube tu proyecto a un repositorio en GitHub
3. En Render, crea un nuevo servicio "Web Service"
4. Conecta tu cuenta de GitHub y selecciona el repositorio
5. Indica que tu carpeta de código está en `mi-api/`
6. Render instalará tus dependencias y levantará tu servidor

### Frontend en Netlify o Vercel

1. Entra a [Netlify](https://netlify.com) o [Vercel](https://vercel.com)
2. Conecta tu repositorio
3. Selecciona la carpeta `frontend/`
4. Se desplegará automáticamente

---

## Características

- Separación clara de responsabilidades con el patrón MVC
- Validaciones de datos usando Mongoose
- Estructura escalable y organizada
- Preparado para producción y despliegue

---

## Comandos útiles

- `npm install` → Instala dependencias
- `node index.js` → Ejecuta el servidor
- `npx nodemon index.js` → Ejecuta el servidor con reinicio automático

---

## .gitignore

El proyecto incluye un archivo `.gitignore` para evitar subir archivos
con datos privados:

```
node_modules/
.env
```

---

## Autor

Desarrollado por **James Cueva**  
💼 Portafolio: próximamente  
📧 Email: james.live.2025@gmail.com

---

## Licencia

Este proyecto está bajo la licencia **MIT**, lo que significa que puedes usar, modificar y distribuir el código con libertad, siempre dando crédito al autor original.

