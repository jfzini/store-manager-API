const camelize = require('camelize');
const connection = require('../configs/connection');
const queries = require('./utils/queries');
const { insertMany } = require('./utils/connection.execute');

const getAllSales = async () => {
  const [sales] = await connection.execute(queries.getAllSalesQuery);
  return camelize(sales);
};

const getSaleById = async (id) => {
  const [sale] = await connection.execute(queries.getSaleByIdQuery, [id]);
  return camelize(sale);
};

const insertSale = async (date) => {
  const [result] = await connection.execute('INSERT INTO sales (date) VALUES (?)', [date]);
  return result.insertId;
};

const createSale = async (saleData) => {
  const [result] = await connection.execute(...insertMany('sales_products', saleData));
  return result;
};

const deleteSale = async (id) => {
  const [result] = await connection.execute('DELETE FROM sales WHERE id = ?', [id]);
  return result;
};

const updateSaleQuantity = async (saleId, productId, quantity) => {
  const [result] = await connection.execute(
    'UPDATE sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?',
    [quantity, saleId, productId],
  );
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
  insertSale,
  createSale,
  deleteSale,
  updateSaleQuantity,
};
