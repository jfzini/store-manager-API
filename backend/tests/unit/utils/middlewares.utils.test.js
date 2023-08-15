const chai = require('chai');
const {
  productIdExists,
  productQuantityExists,
  productQuantityIsNumber,
  productQuantityIsGreaterThanZero,
} = require('../../../src/middlewares/utils/middlewares.utils');
const {
  createSuccessfulSaleBodyMock,
  missingProductIdBodyMock,
  missingQuantityBodyMock,
  NaNQuantityBodyMock,
  zeroQuantityBodyMock,
} = require('../mocks/utils/middlewares.utils.mocks');

const { expect } = chai;

describe('Test Middlewares utilitary functions', function () {
  it('productIdExists should work correctly', function () {
    expect(productIdExists(createSuccessfulSaleBodyMock)).to.be.equal(true);
    expect(productIdExists(missingProductIdBodyMock)).to.be.equal(false);
  });

  it('productQuantityExists should work correctly', function () {
    expect(productQuantityExists(createSuccessfulSaleBodyMock)).to.be.equal(true);
    expect(productQuantityExists(missingQuantityBodyMock)).to.be.equal(false);
  });

  it('productQuantityIsNumber should work correctly', function () {
    expect(productQuantityIsNumber(createSuccessfulSaleBodyMock)).to.be.equal(true);
    expect(productQuantityIsNumber(NaNQuantityBodyMock)).to.be.equal(false);
  });

  it('productQuantityIsGreaterThanZero should work correctly', function () {
    expect(productQuantityIsGreaterThanZero(createSuccessfulSaleBodyMock)).to.be.equal(true);
    expect(productQuantityIsGreaterThanZero(zeroQuantityBodyMock)).to.be.equal(false);
  });
});
