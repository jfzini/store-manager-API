const { expect } = require('chai');
const sinon = require('sinon');
const { SalesServices } = require('../../../src/services');
const { SalesModels } = require('../../../src/models');

// mocks
const {
  getAllSalesFromModel,
  getSaleByIdFromModel,
  createSaleFromModel,
} = require('../mocks/models/sales.models.mocks');
const {
  getAllSalesFromService,
  getSaleByIdFromService,
  createdSaleFromService,
} = require('../mocks/services/sales.services.mocks');
const { createSuccessfulSaleBodyMock } = require('../mocks/utils/middlewares.utils.mocks');

describe('Sales Services unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAllSales should return an array of all sales', async function () {
    sinon.stub(SalesModels, 'getAllSales').resolves(getAllSalesFromModel);
    const sales = await SalesServices.getAllSales();
    expect(sales).to.be.an('array');
    expect(sales).to.have.lengthOf(3);
    expect(sales).to.deep.equal(getAllSalesFromService);
  });

  it('getSaleById should return an array with the sale data', async function () {
    sinon.stub(SalesModels, 'getSaleById').resolves(getSaleByIdFromModel);
    const sale = await SalesServices.getSaleById(1);
    expect(sale).to.be.an('array');
    expect(sale).to.deep.equal(getSaleByIdFromService);
  });

  it('createSale should return an object with the created sale data', async function () {
    sinon.stub(SalesModels, 'insertSale').resolves(4);
    sinon.stub(SalesModels, 'createSale').resolves(createSaleFromModel);
    const createdSale = await SalesServices.createSale(createSuccessfulSaleBodyMock);
    expect(createdSale).to.be.an('object');
    expect(createdSale).to.deep.equal(createdSaleFromService);
  });
});
