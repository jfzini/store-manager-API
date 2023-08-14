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

module.exports = {
  getAllSales,
  getSaleById,
};
