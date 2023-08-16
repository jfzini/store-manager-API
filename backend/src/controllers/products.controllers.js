const { ProductsServices } = require('../services');
const { OK, NOT_FOUND, CREATED, NO_CONTENT } = require('../utils/statusHTTP');

const getAllProducts = async (req, res) => {
  const products = await ProductsServices.getAllProducts();
  return res.status(OK).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductsServices.getProductById(id);
  if (product) {
    return res.status(OK).json(product);
  }
  return res.status(NOT_FOUND).json({ message: 'Product not found' });
};

const createProduct = async (req, res) => {
  const product = req.body;
  const result = await ProductsServices.createProduct(product);
  return res.status(CREATED).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const foundProduct = await ProductsServices.getProductById(id);
  if (!foundProduct) {
    return res.status(NOT_FOUND).json({ message: 'Product not found' });
  }
  const result = await ProductsServices.updateProduct(id, product);
  return res.status(OK).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const foundProduct = await ProductsServices.getProductById(id);
  if (!foundProduct) {
    return res.status(NOT_FOUND).json({ message: 'Product not found' });
  }
  await ProductsServices.deleteProduct(id);
  return res.status(NO_CONTENT).end();
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const products = await ProductsServices.searchProduct(q);
  return res.status(OK).json(products);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
