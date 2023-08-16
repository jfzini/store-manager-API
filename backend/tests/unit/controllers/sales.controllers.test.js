const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { SalesServices, ProductsServices } = require('../../../src/services');
const {
  getAllSalesFromService,
  getSaleByIdFromService,
  createdSaleFromService,
} = require('../mocks/services/sales.services.mocks');
const { SalesControllers } = require('../../../src/controllers');
const { createSuccessfulSaleBodyMock } = require('../mocks/utils/middlewares.utils.mocks');

const { expect } = chai;
chai.use(sinonChai);

describe('Sales Controllers unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAllSales should be sucessful', async function () {
    sinon.stub(SalesServices, 'getAllSales').resolves(getAllSalesFromService);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesControllers.getAllSales(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('getSaleById should be sucessful', async function () {
    sinon.stub(SalesServices, 'getSaleById').resolves(getSaleByIdFromService);
    const req = {
      params: { id: '1' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesControllers.getSaleById(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('getSaleById should NOT be sucessful', async function () {
    sinon.stub(SalesServices, 'getSaleById').resolves([]);
    const req = {
      params: { id: '1' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesControllers.getSaleById(req, res);
    expect(res.status).to.have.been.calledWith(404);
  });

  it('createSale should be sucessful', async function () {
    sinon.stub(ProductsServices, 'getProductById').resolves({ id: 1, name: 'Martelo de Thor' });
    sinon.stub(SalesServices, 'createSale').resolves(createdSaleFromService);
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesControllers.createSale(req, res);
    expect(res.status).to.have.been.calledWith(201);
  });

  it('createSale should return status 404', async function () {
    sinon
      .stub(ProductsServices, 'getProductById')
      .onFirstCall()
      .resolves(undefined)
      .onSecondCall()
      .resolves({ id: 1, name: 'Martelo de Thor' });
    sinon.stub(SalesServices, 'createSale').resolves(createdSaleFromService);
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await SalesControllers.createSale(req, res);
    expect(res.status).to.have.been.calledWith(404);
  });

  // it('createSale should return status 422', async function () {
  //   const error = new Error('Some weird error');
  //   sinon.stub(SalesServices, 'createSale').throws(error);
  //   const req = {
  //     body: {},
  //   };
  //   const res = {
  //     status: sinon.stub().returnsThis(),
  //     json: sinon.stub(),
  //   };
  //   await SalesControllers.createSale(req, res);
  //   expect(res.status).to.have.been.calledWith(422);
  // });
});
