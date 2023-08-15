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
  const eachSaleData = [];
  saleData.forEach((sale) => {
    Object.values(sale).forEach((value) => {
      eachSaleData.push(value);
    });
  });
  const [result] = await connection.execute(insertMany('sales_products', saleData), eachSaleData);
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
  insertSale,
  createSale,
};
