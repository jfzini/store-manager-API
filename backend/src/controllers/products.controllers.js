const { ProductsServices } = require('../services');

const getAllProducts = async (req, res) => {
  const products = await ProductsServices.getAllProducts();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductsServices.getProductById(id);
  if (product) {
    return res.status(200).json(product);
  }
  return res.status(404).json({ message: 'Product not found' });
};

const createProduct = async (req, res) => {
  const product = req.body;
  const result = await ProductsServices.createProduct(product);
  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const foundProduct = await ProductsServices.getProductById(id);
  if (!foundProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const result = await ProductsServices.updateProduct(id, product);
  return res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const foundProduct = await ProductsServices.getProductById(id);
  if (!foundProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  await ProductsServices.deleteProduct(id);
  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
