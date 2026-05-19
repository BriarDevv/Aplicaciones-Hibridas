# Aplicaciones Híbridas — Maletín RE4

## Descripción

Réplica jugable del **maletín de Resident Evil 4 Remake** con back-end y front-end propios.
El proyecto vive en `Semana-08/` y consta de:

- **Back-end** REST en **Node.js + Express + Mongoose** con autenticación **JWT** y hash de contraseñas con **bcrypt**. Gestiona usuarios, catálogo de items (con tamaño canónico del juego) y el maletín de cada usuario.
- **Front-end** en **React 19 + Vite 8**: imagen real del maletín como fondo, grilla SVG trazada a mano en perspectiva (13×9 celdas trapezoidales), catálogo lateral arrastrable, snap por *point-in-polygon*, rotación, auto-sort y persistencia por usuario.

Las semanas previas (`Semana-01` … `Semana-07`) son entregas anteriores del curso.

---

## Endpoints

### Usuarios — `/api/users`

| Método   | Ruta                       | Auth  | Descripción                          |
|----------|----------------------------|-------|--------------------------------------|
| `POST`   | `/api/users/register`      | —     | Registrar un nuevo usuario           |
| `POST`   | `/api/users/login`         | —     | Iniciar sesión (devuelve JWT)        |
| `GET`    | `/api/users`               | JWT   | Obtener todos los usuarios           |
| `GET`    | `/api/users/:id`           | JWT   | Obtener un usuario por ID            |
| `DELETE` | `/api/users/:id`           | JWT   | Eliminar un usuario por ID           |
| `PATCH`  | `/api/users/:id/name`      | JWT   | Actualizar nombre                    |
| `PATCH`  | `/api/users/:id/email`     | JWT   | Actualizar email                     |
| `PATCH`  | `/api/users/:id/password`  | JWT   | Actualizar contraseña                |

### Items (catálogo) — `/api/items`

| Método   | Ruta                | Auth  | Descripción                          |
|----------|---------------------|-------|--------------------------------------|
| `GET`    | `/api/items`        | —     | Listar todos los items               |
| `GET`    | `/api/items/:id`    | —     | Obtener un item por ID               |
| `POST`   | `/api/items`        | JWT   | Crear item                           |
| `PATCH`  | `/api/items/:id`    | JWT   | Actualizar item                      |
| `DELETE` | `/api/items/:id`    | JWT   | Eliminar item                        |

### Maletín — `/api/briefcase` (todo bajo JWT del usuario)

| Método   | Ruta                          | Descripción                          |
|----------|-------------------------------|--------------------------------------|
| `GET`    | `/api/briefcase`              | Obtener mi maletín                   |
| `PUT`    | `/api/briefcase`              | Reemplazar maletín completo          |
| `DELETE` | `/api/briefcase`              | Vaciar maletín                       |
| `PATCH`  | `/api/briefcase/size`         | Cambiar tamaño del maletín           |
| `POST`   | `/api/briefcase/items`        | Agregar item                         |
| `PATCH`  | `/api/briefcase/items/:idx`   | Mover / rotar item                   |
| `DELETE` | `/api/briefcase/items/:idx`   | Quitar item                          |

---

## Instalación y uso

### Back-end

```bash
cd Semana-08
npm install
cp .env.example .env   # completar URI de Mongo, SECRET_KEY, etc.
npm run seed           # poblar catálogo con items canónicos de RE4 Remake
npm run dev            # arranca en http://localhost:3000
```

### Front-end

```bash
cd Semana-08/client
npm install
npm run dev            # arranca en http://localhost:5173
```

---

## Características del front-end

- **Imagen real del maletín** como fondo, con grilla SVG en perspectiva (13×9) calibrable.
- **Drag & drop** desde el catálogo a las celdas, con snap usando *point-in-polygon* ray casting.
- **Rotación**: `Q` mientras arrastrás, *click derecho* sobre una pieza ya colocada.
- **Quitar**: *doble click* sobre una pieza.
- **Auto-sort**: tecla `Alt` o botón — *first-fit decreasing* probando ambas rotaciones.
- **Iconos `.webp`** de cada item con detección automática de orientación: si el aspect natural no coincide con la celda, se rota 90° y se ajusta al rectángulo inscripto del trapezoide para que nunca se corte.
- **Tamaños canónicos de RE4 Remake** en cada item (~95 items entre pistolas, escopetas, rifles, magnums, cuchillos, hierbas, comida, accesorios y crafting).
- **Persistencia por usuario** en MongoDB: cada cuenta tiene su maletín guardado.

---

## Tecnologías

**Back:** Node.js · Express 5 · Mongoose · bcrypt · jsonwebtoken · dotenv
**Front:** React 19 · Vite 8 · SVG nativo (sin librerías de drag/drop ni de canvas)
**DB:** MongoDB Atlas

---

## Integrantes del equipo

| Nombre         | Rol / Legajo |
|----------------|--------------|
| Mateo Garcia   |   Chairman   |
