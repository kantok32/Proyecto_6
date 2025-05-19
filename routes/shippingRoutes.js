const express = require('express');
const router = express.Router();
const shippingController = require('../controllers/shippingController');
const auth = require('../middleware/auth');

// Todas las rutas requieren autenticación
router.use(auth);

/**
 * @swagger
 * /api/shipping/create:
 *   post:
 *     summary: Crear un nuevo envío
 *     tags:
 *       - Envíos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: 60f7c2b8e1b1c2a5d8e4a123
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                     example: Calle Principal
 *                   number:
 *                     type: string
 *                     example: 123
 *                   city:
 *                     type: string
 *                     example: Ciudad
 *                   state:
 *                     type: string
 *                     example: Estado
 *                   zipCode:
 *                     type: string
 *                     example: 12345
 *                   country:
 *                     type: string
 *                     example: País
 *               shippingMethod:
 *                 type: string
 *                 enum: [standard, express, priority]
 *                 example: standard
 *     responses:
 *       201:
 *         description: Envío creado exitosamente
 *       401:
 *         description: Token inválido o no proporcionado
 */
router.post('/create', shippingController.createShipping);

/**
 * @swagger
 * /api/shipping/my-shippings:
 *   get:
 *     summary: Obtener todos los envíos del usuario autenticado
 *     tags:
 *       - Envíos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de envíos del usuario
 *       401:
 *         description: Token inválido o no proporcionado
 */
router.get('/my-shippings', shippingController.getUserShippings);

/**
 * @swagger
 * /api/shipping/{id}:
 *   get:
 *     summary: Obtener un envío específico por ID
 *     tags:
 *       - Envíos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del envío
 *     responses:
 *       200:
 *         description: Detalles del envío
 *       401:
 *         description: Token inválido o no proporcionado
 *       404:
 *         description: Envío no encontrado
 */
router.get('/:id', shippingController.getShipping);

/**
 * @swagger
 * /api/shipping/{id}/status:
 *   put:
 *     summary: Actualizar el estado de un envío
 *     tags:
 *       - Envíos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del envío
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, processing, shipped, delivered, cancelled]
 *                 example: shipped
 *               trackingNumber:
 *                 type: string
 *                 example: 123456789
 *     responses:
 *       200:
 *         description: Estado de envío actualizado exitosamente
 *       401:
 *         description: Token inválido o no proporcionado
 *       404:
 *         description: Envío no encontrado
 */
router.put('/:id/status', shippingController.updateShippingStatus);

/**
 * @swagger
 * /api/shipping/{id}:
 *   delete:
 *     summary: Cancelar un envío
 *     tags:
 *       - Envíos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del envío
 *     responses:
 *       200:
 *         description: Envío cancelado exitosamente
 *       401:
 *         description: Token inválido o no proporcionado
 *       404:
 *         description: Envío no encontrado
 */
router.delete('/:id', shippingController.cancelShipping);

module.exports = router; 