const express = require('express');

// middlewares
const CreateSaleMiddlewares = require('../middlewares/createSale.middlewares');
const { validateUpdateQuantity } = require('../middlewares/updateSale.middlewares');

// controllers
const { SalesControllers } = require('../controllers');

const salesRouter = express.Router();

salesRouter.get('/', SalesControllers.getAllSales);
salesRouter.get('/:id', SalesControllers.getSaleById);
salesRouter.post('/', CreateSaleMiddlewares, SalesControllers.createSale);
salesRouter.delete('/:id', SalesControllers.deleteSale);
salesRouter.put(
  '/:saleId/products/:productId/quantity',
  validateUpdateQuantity,
  SalesControllers.updateSaleQuantity,
);

module.exports = salesRouter;
