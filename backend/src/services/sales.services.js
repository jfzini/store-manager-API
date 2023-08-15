const snakeize = require('snakeize');
const { SalesModels } = require('../models');

const getAllSales = async () => {
  const salesModel = await SalesModels.getAllSales();
  const sales = salesModel.map(({ saleId, date, productId, quantity }) => ({
    saleId,
    date,
    productId,
    quantity,
  }));
  return sales;
};

const getSaleById = async (id) => {
  const saleModel = await SalesModels.getSaleById(id);
  const sale = saleModel.map(({ date, productId, quantity }) => ({ date, productId, quantity }));
  return sale;
};

const createSale = async (saleArr) => {
  const saleId = await SalesModels.insertSale(new Date());
  const saleData = saleArr.map((sale) => ({ saleId, ...sale }));
  await SalesModels.createSale(snakeize(saleData));
  return { id: saleId, itemsSold: saleArr };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};
