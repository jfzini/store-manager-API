const productsService = require('../services/products.services');

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getProductById(id);
  if (product) {
    return res.status(200).json(product);
  }
  return res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  getAllProducts,
  getProductById,
};
