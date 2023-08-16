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

const updateProduct = async (id, product) => {
  await ProductsModels.updateProduct(id, product);
  const updatedProduct = { id: parseInt(id, 10), ...product };
  return updatedProduct;
};

const deleteProduct = async (id) => {
  await ProductsModels.deleteProduct(id);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
