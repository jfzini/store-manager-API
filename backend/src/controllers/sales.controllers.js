const { SalesServices, ProductsServices } = require('../services');
const { OK, NOT_FOUND, CREATED, NO_CONTENT } = require('../utils/statusHTTP');

const getAllSales = async (req, res) => {
  const sales = await SalesServices.getAllSales();
  res.status(OK).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await SalesServices.getSaleById(id);
  if (sale.length > 0) {
    return res.status(OK).json(sale);
  }
  return res.status(NOT_FOUND).json({ message: 'Sale not found' });
};

const createSale = async (req, res) => {
  const salesData = req.body;
  const productsFound = await Promise.all(
    salesData.map(async ({ productId }) => ProductsServices.getProductById(productId)),
  );
  const productsValid = productsFound.every((product) => product !== undefined);

  if (productsValid) {
    const sale = await SalesServices.createSale(salesData);
    return res.status(CREATED).json(sale);
  }
  return res.status(NOT_FOUND).json({ message: 'Product not found' });
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const foundSale = await SalesServices.getSaleById(id);
  if (foundSale.length === 0) {
    return res.status(NOT_FOUND).json({ message: 'Sale not found' });
  }
  await SalesServices.deleteSale(id);
  return res.status(NO_CONTENT).end();
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  deleteSale,
};
