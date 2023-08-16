const { SalesServices, ProductsServices } = require('../services');

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
  const productsFound = await Promise.all(
    salesData.map(async ({ productId }) => ProductsServices.getProductById(productId)),
  );
  const productsValid = productsFound.every((product) => product !== undefined);

  if (productsValid) {
    const sale = await SalesServices.createSale(salesData);
    return res.status(201).json(sale);
  }
  return res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};
