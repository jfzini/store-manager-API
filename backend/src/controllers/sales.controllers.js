const { SalesServices } = require('../services');

const getAllSales = async (req, res) => {
  const sales = await SalesServices.getAllSales();
  res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await SalesServices.getSaleById(id);
  if (sale.length > 0) {
    return res.status(200).json(sale);
  }
  return res.status(404).json({ message: 'Sale not found' });
};

module.exports = {
  getAllSales,
  getSaleById,
};