const express = require('express');

// middlewares
const SalesMiddlewares = require('../middlewares/sales.middlewares');

// controllers
const { SalesControllers } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', SalesControllers.getAllSales);
salesRouter.get('/:id', SalesControllers.getSaleById);
salesRouter.post('/', SalesMiddlewares, SalesControllers.createSale);

module.exports = salesRouter;
