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

const updateProduct = async (id, product) => {
  const [result] = await connection.execute('UPDATE products SET name = ? WHERE id = ?', [
    ...Object.values(product),
    id,
  ]);
  return result;
};

const deleteProduct = async (id) => {
  const [result] = await connection.execute('DELETE FROM products WHERE id = ?', [id]);
  return result;
};

const searchProduct = async (name) => {
  const [result] = await connection
    .execute('SELECT * FROM products WHERE name LIKE ?', [`%${name}%`]);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
