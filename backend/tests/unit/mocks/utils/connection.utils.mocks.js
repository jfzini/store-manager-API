const insertObjMock = { name: 'Test Product' };

const returnInsertMock = 'INSERT INTO products (name) VALUES (?)';

const insertArrMock = [
  { name: 'Test Product 1', quantity: 1 },
  { name: 'Test Product 2', quantity: 2 },
  { name: 'Test Product 3', quantity: 3 },
];

const returnInsertManyMock = [
  'INSERT INTO products (name, quantity) VALUES (?, ?), (?, ?), (?, ?)',
  ['Test Product 1', 1, 'Test Product 2', 2, 'Test Product 3', 3],
];

module.exports = {
  insertObjMock,
  insertArrMock,
  returnInsertMock,
  returnInsertManyMock,
};
