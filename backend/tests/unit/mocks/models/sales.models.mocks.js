const getAllSalesFromDB = [
  [
    {
      id: 1,
      date: '2023-08-14T20:24:15.000Z',
      sale_id: 1,
      product_id: 1,
      quantity: 5,
    },
    {
      id: 1,
      date: '2023-08-14T20:24:15.000Z',
      sale_id: 1,
      product_id: 2,
      quantity: 10,
    },
    {
      id: 2,
      date: '2023-08-14T20:24:15.000Z',
      sale_id: 2,
      product_id: 3,
      quantity: 15,
    },
  ],
  null,
];

const getAllSalesFromModel = [
  {
    id: 1,
    date: '2023-08-14T20:24:15.000Z',
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    id: 1,
    date: '2023-08-14T20:24:15.000Z',
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
  {
    id: 2,
    date: '2023-08-14T20:24:15.000Z',
    saleId: 2,
    productId: 3,
    quantity: 15,
  },
];

const getSaleByIdFromDB = [
  [
    {
      id: 1,
      date: '2023-08-14T20:24:15.000Z',
      sale_id: 1,
      product_id: 1,
      quantity: 5,
    },
    {
      id: 1,
      date: '2023-08-14T20:24:15.000Z',
      sale_id: 1,
      product_id: 2,
      quantity: 10,
    },
  ],
  null,
];

const getSaleByIdFromModel = [
  {
    id: 1,
    date: '2023-08-14T20:24:15.000Z',
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    id: 1,
    date: '2023-08-14T20:24:15.000Z',
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  getAllSalesFromDB,
  getAllSalesFromModel,
  getSaleByIdFromDB,
  getSaleByIdFromModel,
};
