const express = require('express');

// controllers
const { ProductsControllers } = require('../controllers');

// middlewares
const { validateCreateProduct } = require('../middlewares/products.middlewares');

const productsRouter = express.Router();

productsRouter.get('/', ProductsControllers.getAllProducts);
productsRouter.get('/search', ProductsControllers.searchProduct);
productsRouter.get('/:id', ProductsControllers.getProductById);
productsRouter.post('/', validateCreateProduct, ProductsControllers.createProduct);
productsRouter.put('/:id', validateCreateProduct, ProductsControllers.updateProduct);
productsRouter.delete('/:id', ProductsControllers.deleteProduct);

module.exports = productsRouter;
