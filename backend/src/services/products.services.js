const { ProductsModels } = require('../models');

const getAllProducts = async () => {
  const products = await ProductsModels.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await ProductsModels.getProductById(id);
  return product;
};

const createProduct = async (product) => {
  const insertResult = await ProductsModels.createProduct(product);
  const insertedProduct = { id: insertResult.insertId, name: product.name };
  return insertedProduct;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
