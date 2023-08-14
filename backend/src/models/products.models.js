const connection = require('../configs/connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return products;
};

module.exports = {
  getAllProducts,
};