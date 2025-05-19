# Proyecto 6: Aplicación Backend con Autenticación

Este proyecto es una aplicación backend que maneja la autenticación y autorización de usuarios, junto con la gestión de productos.

## Características

- Autenticación de usuarios con JWT
- Registro e inicio de sesión de usuarios
- CRUD completo de productos
- Relación entre usuarios y productos
- Protección de rutas con middleware de autenticación

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear archivo `.env` con las siguientes variables:
   ```
   PORT=3000
   MONGODB_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_clave_secreta_jwt
   ```
4. Iniciar el servidor:
   ```bash
   npm start
   ```

## Endpoints

### Usuario

- POST `/api/user/register` - Registrar usuario
- POST `/api/user/login` - Iniciar sesión
- GET `/api/user/verifytoken` - Verificar token
- PUT `/api/user/update` - Actualizar usuario (requiere autenticación)

### Producto

- POST `/api/product/create` - Crear producto (requiere autenticación)
- GET `/api/product/readall` - Obtener todos los productos
- GET `/api/product/readone/:id` - Obtener un producto específico
- PUT `/api/product/update/:id` - Actualizar producto (requiere autenticación)
- DELETE `/api/product/delete/:id` - Eliminar producto (requiere autenticación)

## Estructura del proyecto

```
Proyecto_6/
├─ .env
├─ .gitignore
├─ README.md
├─ controllers/
│  ├─ userController.js
│  └─ productController.js
├─ models/
│  ├─ userModel.js
│  └─ productModel.js
├─ routes/
│  ├─ userRoutes.js
│  └─ productRoutes.js
├─ middleware/
│  └─ auth.js
└─ server.js
``` 