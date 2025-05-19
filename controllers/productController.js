const Product = require('../models/productModel');

// Crear producto
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const userId = req.user.userId; // Viene del middleware de autenticación

    const product = new Product({
      name,
      description,
      price,
      user: userId
    });

    await product.save();

    res.status(201).json({
      message: 'Producto creado exitosamente',
      product
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error: error.message });
  }
};

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('user', 'name email');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
};

// Obtener un producto específico
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('user', 'name email');
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto', error: error.message });
  }
};

// Actualizar producto
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Verificar que el usuario sea el propietario del producto
    if (product.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'No autorizado para actualizar este producto' });
    }

    // Actualizar campos
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;

    await product.save();

    res.json({
      message: 'Producto actualizado exitosamente',
      product
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error: error.message });
  }
};

// Eliminar producto
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Verificar que el usuario sea el propietario del producto
    if (product.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'No autorizado para eliminar este producto' });
    }

    await product.deleteOne();

    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error: error.message });
  }
}; 