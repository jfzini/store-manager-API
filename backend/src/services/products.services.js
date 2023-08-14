const { ProductsModels } = require('../models');

const getAllProducts = async () => {
  const products = await ProductsModels.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await ProductsModels.getProductById(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};
