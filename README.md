# Mercado Pirata API

API para autenticación, productos y envíos

## Características principales

- Autenticación y autorización de usuarios con JWT
- Registro e inicio de sesión de usuarios
- CRUD completo de productos
- Sistema de envíos (estilo e-commerce)
- Relación entre usuarios y productos
- Protección de rutas con middleware de autenticación
- Documentación interactiva con Swagger/OpenAPI

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv
- Swagger (swagger-ui-express, swagger-jsdoc)

## Estructura del proyecto

```
MercadoPirata/
├─ .env
├─ .gitignore
├─ README.md
├─ controllers/
│  ├─ userController.js
│  ├─ productController.js
│  └─ shippingController.js
├─ models/
│  ├─ userModel.js
│  ├─ productModel.js
│  └─ shippingModel.js
├─ routes/
│  ├─ userRoutes.js
│  ├─ productRoutes.js
│  └─ shippingRoutes.js
├─ middleware/
│  └─ auth.js
├─ swagger.js
└─ server.js
```

## Pasos para ejecutar el proyecto

1. **Clona el repositorio**
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Crea el archivo `.env` en la raíz del proyecto con:**
   ```
   PORT=3000
   MONGODB_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_clave_secreta_jwt
   ```
4. **Inicia el servidor:**
   ```bash
   npm run dev
   ```
5. **Accede a la documentación interactiva:**
   - Ve a [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Cumplimiento de requisitos del proyecto

### 1. Arquitectura de carpetas y archivos clara
El proyecto está organizado en carpetas para controladores, modelos, rutas, middleware y archivos de configuración, siguiendo buenas prácticas de modularidad y escalabilidad.

### 2. Autenticación y autorización
Se implementa autenticación de usuarios con JWT y middleware para proteger rutas. Solo los usuarios autenticados pueden acceder a endpoints protegidos.

### 3. Modelos de Usuario y Producto
Existen modelos de Usuario y Producto usando Mongoose, con validaciones y relaciones entre ellos. Además, se incluye un modelo de Envío para simular un sistema de e-commerce.

### 4. Operaciones CRUD para Producto
Se implementan endpoints para crear, leer, actualizar y eliminar productos, cumpliendo con el ciclo CRUD completo.

### 5. Uso de MongoDB y Mongoose
Toda la persistencia de datos se realiza en MongoDB Atlas usando Mongoose como ORM, facilitando la interacción y validación de datos.

### 6. Control de versiones (Git & GitHub)
El proyecto está versionado con Git y alojado en un repositorio de GitHub. Incluye un archivo `.gitignore` para evitar subir archivos sensibles o innecesarios.

### 7. Documentación de la API con Swagger/OpenAPI
La API está documentada con Swagger/OpenAPI, accesible en `/api-docs`, permitiendo probar y entender todos los endpoints de manera visual e interactiva.

### 8. Variables de entorno gestionadas con dotenv
Las variables sensibles y de configuración se gestionan mediante el archivo `.env` y la librería dotenv, siguiendo buenas prácticas de seguridad.

## Endpoints principales

### Usuario
- POST `/api/user/register` — Registrar usuario
- POST `/api/user/login` — Iniciar sesión
- GET `/api/user/verifytoken` — Verificar token
- PUT `/api/user/update` — Actualizar usuario (requiere autenticación)

### Productos
- POST `/api/product/create` — Crear producto (requiere autenticación)
- GET `/api/product/readall` — Obtener todos los productos
- GET `/api/product/readone/:id` — Obtener un producto específico
- PUT `/api/product/update/:id` — Actualizar producto (requiere autenticación)
- DELETE `/api/product/delete/:id` — Eliminar producto (requiere autenticación)

### Envíos
- POST `/api/shipping/create` — Crear envío (requiere autenticación)
- GET `/api/shipping/my-shippings` — Obtener envíos del usuario (requiere autenticación)
- GET `/api/shipping/:id` — Obtener un envío específico (requiere autenticación)
- PUT `/api/shipping/:id/status` — Actualizar estado del envío (requiere autenticación)
- DELETE `/api/shipping/:id` — Cancelar envío (requiere autenticación)

## Notas adicionales
- Puedes extender el sistema agregando integración con Stripe o carrito de compras.
- Para probar endpoints protegidos, primero regístrate, luego haz login y usa el token JWT en Swagger UI (candado verde).
- Si tienes dudas, revisa la documentación en `/api-docs`.

---
¡Bienvenido a Mercado Pirata! 🏴‍☠️ 