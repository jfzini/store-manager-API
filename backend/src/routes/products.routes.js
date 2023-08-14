const express = require('express');

const productsRouter = express.Router();

const { getAllProducts, getProductById } = require('../controllers/products.controllers');

productsRouter.get('/', getAllProducts);
productsRouter.get('/:id', getProductById);

module.exports = productsRouter;
