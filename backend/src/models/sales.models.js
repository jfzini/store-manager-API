const camelize = require('camelize');
const connection = require('../configs/connection');
const queries = require('./queries/queries');

const getAllSales = async () => {
  const [sales] = await connection.execute(queries.getAllSalesQuery);
  return camelize(sales);
};

const getSaleById = async (id) => {
  const [sale] = await connection.execute(queries.getSaleByIdQuery, [id]);
  return camelize(sale);
};

module.exports = {
  getAllSales,
  getSaleById,
};
