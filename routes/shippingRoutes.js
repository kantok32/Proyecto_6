const express = require('express');
const router = express.Router();
const shippingController = require('../controllers/shippingController');
const auth = require('../middleware/auth');

// Todas las rutas requieren autenticación
router.use(auth);

// Crear envío
router.post('/create', shippingController.createShipping);

// Obtener envíos del usuario
router.get('/my-shippings', shippingController.getUserShippings);

// Obtener un envío específico
router.get('/:id', shippingController.getShipping);

// Actualizar estado del envío
router.put('/:id/status', shippingController.updateShippingStatus);

// Cancelar envío
router.delete('/:id', shippingController.cancelShipping);

module.exports = router; 