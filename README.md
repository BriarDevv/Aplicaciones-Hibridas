# Users API

## Descripción

API RESTful para gestión de usuarios desarrollada con **Node.js**, **Express** y **MongoDB**. Permite registrar, autenticar y administrar usuarios mediante operaciones CRUD completas. Utiliza **bcrypt** para el hash de contraseñas y **JWT** para la autenticación.

---

## Endpoints

| Método   | Ruta                       | Descripción                          |
|----------|----------------------------|--------------------------------------|
| `GET`    | `/api/users`               | Obtener todos los usuarios           |
| `GET`    | `/api/users/:id`           | Obtener un usuario por ID            |
| `POST`   | `/api/users/register`      | Registrar un nuevo usuario           |
| `POST`   | `/api/users/login`         | Iniciar sesión (devuelve JWT)        |
| `DELETE` | `/api/users/:id`           | Eliminar un usuario por ID           |
| `PATCH`  | `/api/users/:id/name`      | Actualizar nombre del usuario        |
| `PATCH`  | `/api/users/:id/email`     | Actualizar email del usuario         |
| `PATCH`  | `/api/users/:id/password`  | Actualizar contraseña del usuario    |

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor (producción)
npm start

# Iniciar servidor (desarrollo con watch)
npm run dev
```

Crear un archivo `.env` basado en `.env.example` con las variables de entorno necesarias.

---

## Integrantes del equipo

| Nombre         | Rol / Legajo |
|----------------|--------------|
| Mateo Garcia   |   Chairman   |

---

## Tecnologías

- Node.js
- Express
- MongoDB / Mongoose
- bcrypt
- JSON Web Tokens (JWT)
- dotenv
- Tailwind CSS
