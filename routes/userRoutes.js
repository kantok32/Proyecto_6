const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Rutas públicas
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/verifytoken', userController.verifyToken);

// Rutas protegidas
router.put('/update', auth, userController.updateUser);

module.exports = router; 