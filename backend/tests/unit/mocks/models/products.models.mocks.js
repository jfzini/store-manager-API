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

module.exports = {
  getAllProductsFromDB,
  getAllProductsFromModel,
  getProductByIdFromDB,
  getProductByIdFromModel,
  createProductFromDB,
  createProductFromModel,
};
