const getAllProductsFromDB = [
  [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
  ],
  null,
];

const getAllProductsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const getProductByIdFromDB = [
  [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
  ],
];

const getProductByIdFromModel = {
  id: 1,
  name: 'Martelo de Thor',
};

const createProductFromDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

const createProductFromModel = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 4,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
};

const updateProductFromDB = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  null,
];

const updateProductFromModel = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 1  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 1,
};

const deleteProductFromDB = [
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

const deleteProductFromModel = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: '',
  serverStatus: 2,
  warningStatus: 0,
};

const searchProductFromDB = [
  [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
  ],
  undefined,
];

const searchProductFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

module.exports = {
  getAllProductsFromDB,
  getAllProductsFromModel,
  getProductByIdFromDB,
  getProductByIdFromModel,
  createProductFromDB,
  createProductFromModel,
  updateProductFromDB,
  updateProductFromModel,
  deleteProductFromDB,
  deleteProductFromModel,
  searchProductFromDB,
  searchProductFromModel,
};
