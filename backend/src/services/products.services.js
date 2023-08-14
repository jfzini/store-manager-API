const productModels = require('../models/products.models');

const getAllProducts = async () => {
  const products = await productModels.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await productModels.getProductById(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};
