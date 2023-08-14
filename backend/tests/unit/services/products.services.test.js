const { expect } = require('chai');
const sinon = require('sinon');
const { ProductsServices } = require('../../../src/services');
const { ProductsModels } = require('../../../src/models');

// mocks
const {
  getAllProductsFromModel,
  getProductByIdFromModel,
  createProductFromModel,
} = require('../mocks/models/products.models.mocks');
const { createProductFromService } = require('../mocks/services/products.services.mocks');

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

  it('createProduct should return an object with the product', async function () {
    sinon.stub(ProductsModels, 'createProduct').resolves(createProductFromModel);
    const productObj = { name: 'Test Product' };
    const product = await ProductsServices.createProduct(productObj);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(createProductFromService);
  });
});
