const Shipping = require('../models/shippingModel');
const Product = require('../models/productModel');

// Crear envío
exports.createShipping = async (req, res) => {
  try {
    const { productId, address, shippingMethod } = req.body;
    const userId = req.user.userId;

    // Verificar que el producto existe
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Calcular costo de envío basado en el método
    const shippingCosts = {
      standard: 5.99,
      express: 12.99,
      priority: 19.99
    };

    const shippingCost = shippingCosts[shippingMethod] || shippingCosts.standard;

    // Calcular fecha estimada de entrega
    const estimatedDeliveryDate = new Date();
    const deliveryDays = {
      standard: 5,
      express: 2,
      priority: 1
    };
    estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + deliveryDays[shippingMethod]);

    const shipping = new Shipping({
      product: productId,
      user: userId,
      address,
      shippingMethod,
      shippingCost,
      estimatedDeliveryDate
    });

    await shipping.save();

    res.status(201).json({
      message: 'Envío creado exitosamente',
      shipping
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear envío', error: error.message });
  }
};

// Obtener envíos del usuario
exports.getUserShippings = async (req, res) => {
  try {
    const userId = req.user.userId;
    const shippings = await Shipping.find({ user: userId })
      .populate('product')
      .sort({ createdAt: -1 });

    res.json(shippings);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener envíos', error: error.message });
  }
};

// Obtener un envío específico
exports.getShipping = async (req, res) => {
  try {
    const shipping = await Shipping.findById(req.params.id)
      .populate('product')
      .populate('user', 'name email');

    if (!shipping) {
      return res.status(404).json({ message: 'Envío no encontrado' });
    }

    // Verificar que el usuario sea el propietario del envío
    if (shipping.user._id.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'No autorizado para ver este envío' });
    }

    res.json(shipping);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener envío', error: error.message });
  }
};

// Actualizar estado del envío
exports.updateShippingStatus = async (req, res) => {
  try {
    const { status, trackingNumber } = req.body;
    const shipping = await Shipping.findById(req.params.id);

    if (!shipping) {
      return res.status(404).json({ message: 'Envío no encontrado' });
    }

    // Verificar que el usuario sea el propietario del envío
    if (shipping.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'No autorizado para actualizar este envío' });
    }

    // Actualizar estado y número de seguimiento
    shipping.status = status;
    if (trackingNumber) {
      shipping.trackingNumber = trackingNumber;
    }

    // Si el estado es 'delivered', actualizar fecha de entrega
    if (status === 'delivered') {
      shipping.actualDeliveryDate = new Date();
    }

    await shipping.save();

    res.json({
      message: 'Estado de envío actualizado exitosamente',
      shipping
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar estado de envío', error: error.message });
  }
};

// Cancelar envío
exports.cancelShipping = async (req, res) => {
  try {
    const shipping = await Shipping.findById(req.params.id);

    if (!shipping) {
      return res.status(404).json({ message: 'Envío no encontrado' });
    }

    // Verificar que el usuario sea el propietario del envío
    if (shipping.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'No autorizado para cancelar este envío' });
    }

    // Solo se puede cancelar si está pendiente o en procesamiento
    if (!['pending', 'processing'].includes(shipping.status)) {
      return res.status(400).json({ message: 'No se puede cancelar un envío que ya está en tránsito' });
    }

    shipping.status = 'cancelled';
    await shipping.save();

    res.json({
      message: 'Envío cancelado exitosamente',
      shipping
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al cancelar envío', error: error.message });
  }
}; 