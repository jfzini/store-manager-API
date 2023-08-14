const connection = require('../configs/connection');
const { insert } = require('./utils/connection.execute');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const getProductById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const createProduct = async (product) => {
  const [result] = await connection.execute(insert('products', product), Object.values(product));
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
