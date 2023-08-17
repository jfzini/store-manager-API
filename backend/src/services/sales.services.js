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

const deleteSale = async (id) => {
  await SalesModels.deleteSale(id);
};

const updateSaleQuantity = async (saleId, productId, quantity) => {
  await SalesModels.updateSaleQuantity(saleId, productId, quantity);
  const saleData = {
    date: new Date(),
    productId: parseInt(productId, 10),
    quantity,
    saleId: parseInt(saleId, 10),
  };
  return saleData;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  deleteSale,
  updateSaleQuantity,
};
