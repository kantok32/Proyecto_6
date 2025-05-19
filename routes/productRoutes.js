const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

// Rutas públicas
router.get('/readall', productController.getAllProducts);
router.get('/readone/:id', productController.getProduct);

// Rutas protegidas
router.post('/create', auth, productController.createProduct);
router.put('/update/:id', auth, productController.updateProduct);
router.delete('/delete/:id', auth, productController.deleteProduct);

module.exports = router; 