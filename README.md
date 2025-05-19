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

## Requisitos y checklist para cumplir el proyecto

- [x] Arquitectura de carpetas clara y modular
- [x] Autenticación y autorización con JWT
- [x] Modelo de Usuario y Producto (y Envío como extra)
- [x] CRUD completo para productos
- [x] Uso de MongoDB Atlas y Mongoose
- [x] Control de versiones con Git y repositorio en GitHub
- [x] Documentación de la API con Swagger/OpenAPI
- [x] Variables de entorno gestionadas con dotenv
- [x] Listo para desplegar en render.com

## Notas adicionales
- Puedes extender el sistema agregando integración con Stripe o carrito de compras.
- Para probar endpoints protegidos, primero regístrate, luego haz login y usa el token JWT en Swagger UI (candado verde).
- Si tienes dudas, revisa la documentación en `/api-docs`.

---
¡Bienvenido a Mercado Pirata! 🏴‍☠️ 