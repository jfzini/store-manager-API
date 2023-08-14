const express = require('express');
const { ProductsControllers } = require('../controllers');

const productsRouter = express.Router();

productsRouter.get('/', ProductsControllers.getAllProducts);
productsRouter.get('/:id', ProductsControllers.getProductById);
productsRouter.post('/', ProductsControllers.createProduct);

module.exports = productsRouter;
