const { expect } = require('chai');
const sinon = require('sinon');
const { ProductsServices } = require('../../../src/services');
const { ProductsModels } = require('../../../src/models');

// mocks
const {
  getAllProductsFromModel,
  getProductByIdFromModel,
  createProductFromModel,
  updateProductFromModel,
  searchProductFromModel,
} = require('../mocks/models/products.models.mocks');
const { createProductFromService, updateProductFromService } = require('../mocks/services/products.services.mocks');

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

  it('updateProduct should return an object with the product', async function () {
    sinon.stub(ProductsModels, 'updateProduct').resolves(updateProductFromModel);
    const productObj = { name: 'Updated Test Product' };
    const product = await ProductsServices.updateProduct(1, productObj);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(updateProductFromService);
  });

  it('deleteProduct should return an object with the product', async function () {
    const stubedDeleteModel = sinon.stub(ProductsModels, 'deleteProduct');
    stubedDeleteModel.resolves();
    await ProductsServices.deleteProduct(1);
    expect(stubedDeleteModel.calledOnce).to.be.equal(true);
  });

  it('searchProduct should return an array with the found products', async function () {
    sinon.stub(ProductsModels, 'searchProduct').resolves(searchProductFromModel);
    const foundProducts = await ProductsServices.searchProduct('artelo');
    expect(foundProducts).to.deep.equal(searchProductFromModel);
  });
});
