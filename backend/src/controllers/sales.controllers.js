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

const createSale = async (req, res) => {
  const salesData = req.body;
  try {
    const sale = await SalesServices.createSale(salesData);
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create sale. Review your data and make sure its correct', error: error.message })
  }
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};