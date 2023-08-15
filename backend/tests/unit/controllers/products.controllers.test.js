const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { ProductsServices } = require('../../../src/services');
const {
  getAllProductsFromModel,
  getProductByIdFromModel,
} = require('../mocks/models/products.models.mocks');
const { ProductsControllers } = require('../../../src/controllers');
const { createProductFromService } = require('../mocks/services/products.services.mocks');

const { expect } = chai;
chai.use(sinonChai);

describe('Products Controllers unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('getAllProducts should be successful', async function () {
    sinon.stub(ProductsServices, 'getAllProducts').resolves(getAllProductsFromModel);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await ProductsControllers.getAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('getProductById should be successful', async function () {
    sinon.stub(ProductsServices, 'getProductById').resolves(getProductByIdFromModel);
    const req = {
      params: { id: '1' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await ProductsControllers.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('getProductById should NOT be successful', async function () {
    sinon.stub(ProductsServices, 'getProductById').resolves(undefined);
    const req = {
      params: { id: '190' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await ProductsControllers.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(404);
  });

  it('createProduct should be successful', async function () {
    sinon.stub(ProductsServices, 'createProduct').resolves(createProductFromService);
    const req = {
      body: { name: 'Test Product' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await ProductsControllers.createProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
  });
});
