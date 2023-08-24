const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: DataTypes.STRING,
    },
    {
      tableName: 'products',
      underscored: true,
    },
  );
  return Product;
};

module.exports = ProductModel;