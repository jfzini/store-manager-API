const getAllSalesQuery = `
SELECT
  *
FROM
  StoreManager.sales s
    JOIN
  StoreManager.sales_products sp ON s.id = sp.sale_id;`;

const getSaleByIdQuery = `
SELECT
  *
FROM
  StoreManager.sales s
    JOIN
  StoreManager.sales_products sp ON s.id = sp.sale_id
WHERE sp.sale_id = ?;`;

module.exports = {
  getAllSalesQuery,
  getSaleByIdQuery,
};
