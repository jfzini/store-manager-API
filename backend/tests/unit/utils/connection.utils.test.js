const chai = require('chai');
const { insert, insertMany } = require('../../../src/models/utils/connection.execute');
const {
  insertObjMock,
  insertArrMock,
  returnInsertMock,
  returnInsertManyMock,
} = require('../mocks/utils/connection.utils.mocks');

const { expect } = chai;

describe('Test Connection utilitary functions', function () {
  it('"insert" should return the correct string', function () {
    expect(insert('products', insertObjMock)).to.be.equal(returnInsertMock);
  });

  it('"insertMany" should return the correct string', function () {
    expect(insertMany('products', insertArrMock)).to.be.equal(returnInsertManyMock);
  });
});
