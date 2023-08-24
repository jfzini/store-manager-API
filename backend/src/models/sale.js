const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      date: DataTypes.DATE,
    },
    {
      tableName: 'sales',
      underscored: true,
    },
  );
  return Sale;
};

module.exports = SaleModel;