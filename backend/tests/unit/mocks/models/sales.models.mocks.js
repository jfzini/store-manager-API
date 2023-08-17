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

const insertSaleInDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 3,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const createSaleFromDB = [
  {
    fieldCount: 0,
    affectedRows: 2,
    insertId: 0,
    info: 'Records: 2  Duplicates: 0  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const createSaleFromModel = {
  fieldCount: 0,
  affectedRows: 2,
  insertId: 0,
  info: 'Records: 2  Duplicates: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
};

const saleDataMock = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 5,
  },
  {
    sale_id: 1,
    product_id: 2,
    quantity: 10,
  },
];

const deleteSaleFromDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const deleteSaleFromModel = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
};

const updateSaleQuantityFromDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  undefined,
];

const updateSaleQuantityFromModel = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 1  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 1,
};

module.exports = {
  getAllSalesFromDB,
  getAllSalesFromModel,
  getSaleByIdFromDB,
  getSaleByIdFromModel,
  insertSaleInDB,
  createSaleFromDB,
  createSaleFromModel,
  saleDataMock,
  deleteSaleFromDB,
  deleteSaleFromModel,
  updateSaleQuantityFromDB,
  updateSaleQuantityFromModel,
};
