const express = require('express');
const { SalesControllers } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', SalesControllers.getAllSales);
salesRouter.get('/:id', SalesControllers.getSaleById);

module.exports = salesRouter;
