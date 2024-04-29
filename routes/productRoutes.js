const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyToken, verifyRoles } = require('../middlewares/authMiddleware');

// Fetch all products
router.get('/', productController.getAllProducts);

// Fetch all products with their prices
router.get('/productos', productController.getProductsPrice);

// Fetch a single product by ID
router.get('/:id', productController.getProductById);

// Create a new product
router.post('/', verifyToken, verifyRoles('admin'), productController.createProduct);

// Update an existing product
router.put('/:id', verifyToken, verifyRoles('admin'), productController.updateProduct);

// Upload a CSV file to create multiple products
router.post('/bulk-create', verifyToken, verifyRoles('admin'), productController.uploadProducts);

module.exports = router;
