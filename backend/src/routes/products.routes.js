const express = require('express');

const productsRouter = express.Router();

const {getAllProducts} = require('../controllers/products.controllers');


productsRouter.get('/', getAllProducts);


module.exports = productsRouter;