# Proyecto 6: Aplicación Backend con Autenticación

Este proyecto es una aplicación backend que maneja la autenticación y autorización de usuarios, junto con la gestión de productos y envíos.

## Características

- Autenticación de usuarios con JWT
- Registro e inicio de sesión de usuarios
- CRUD completo de productos
- Sistema de envíos similar a Mercado Libre
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

### Envíos

- POST `/api/shipping/create` - Crear envío (requiere autenticación)
  ```json
  {
    "productId": "id_del_producto",
    "address": {
      "street": "Calle Principal",
      "number": "123",
      "city": "Ciudad",
      "state": "Estado",
      "zipCode": "12345",
      "country": "País"
    },
    "shippingMethod": "standard|express|priority"
  }
  ```
- GET `/api/shipping/my-shippings` - Obtener envíos del usuario (requiere autenticación)
- GET `/api/shipping/:id` - Obtener un envío específico (requiere autenticación)
- PUT `/api/shipping/:id/status` - Actualizar estado del envío (requiere autenticación)
  ```json
  {
    "status": "pending|processing|shipped|delivered|cancelled",
    "trackingNumber": "123456789"
  }
  ```
- DELETE `/api/shipping/:id` - Cancelar envío (requiere autenticación)

## Estructura del proyecto

```
Proyecto_6/
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
└─ server.js
``` 