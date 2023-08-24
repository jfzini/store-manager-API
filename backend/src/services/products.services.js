const { QueryTypes } = require('sequelize');
const { Product } = require('../models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const createProduct = async (product) => {
  const insertResult = await Product.create(product);
  return insertResult;
};

const updateProduct = async (id, product) => {
  const [updateStatus] = await Product.update(product, { where: { id } });
  let updatedProduct;
  if (updateStatus) {
    updatedProduct = await Product.findByPk(id);
  }
  return updatedProduct;
};

const deleteProduct = async (id) => {
  await Product.destroy({ where: { id } });
};

const searchProduct = async (name) => {
  const products = await Product.sequelize.query(
    `SELECT * FROM products WHERE name LIKE '%${name}%'`,
    { type: QueryTypes.SELECT },
  );
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
