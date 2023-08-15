const chai = require('chai');
const { insert } = require('../../../src/models/utils/connection.execute');

const { expect } = chai;

describe('Test utilitary functions', function () {
  describe('Test connection utils', function () {
    it('"insert" should return the correct string', function () {
      expect(insert('products', { name: 'Test Product' })).to.be.equal(
        'INSERT INTO products (name) VALUES (?)',
      );
    });
  });
});
