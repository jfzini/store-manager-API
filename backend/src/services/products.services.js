const productModels = require('../models/products.models');

const getAllProducts = async () => {
  const products = await productModels.getAllProducts();
  return products;
}

module.exports = {
  getAllProducts,
};