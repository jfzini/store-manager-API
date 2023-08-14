const { expect } = require('chai');
const sinon = require('sinon');
const { ProductsServices } = require('../../../src/services');
const { ProductsModels } = require('../../../src/models');

// mocks
const { getAllProductsFromModel, getProductByIdFromModel } = require('../mocks/user.models.mocks');

describe('Products Services unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAllProducts should return an array of all products', async function () {
    sinon.stub(ProductsModels, 'getAllProducts').resolves(getAllProductsFromModel);
    const products = await ProductsServices.getAllProducts();
    expect(products).to.be.an('array');
    expect(products).to.deep.equal(getAllProductsFromModel);
  });

  it('getProductById should return an object with the product', async function () {
    sinon.stub(ProductsModels, 'getProductById').resolves(getProductByIdFromModel);
    const product = await ProductsServices.getProductById(1);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(getProductByIdFromModel);
  });
});
