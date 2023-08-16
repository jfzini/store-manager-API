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
  updateSaleQuantityFromService,
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

  it('deleteSale should call SalesModels.deleteSale', async function () {
    const deleteSaleModelMock = sinon.stub(SalesModels, 'deleteSale').resolves();
    await SalesServices.deleteSale(1);
    expect(deleteSaleModelMock.calledOnce).to.be.equal(true);
  });

  it('updateSaleQuantity should return an object with the updated sale data', async function () {
    this.clock = sinon.useFakeTimers({
      now: new Date('2023-08-14T20:24:15.000Z'),
    });
    const updateSaleModelMock = sinon.stub(SalesModels, 'updateSaleQuantity').resolves();
    const updatedSale = await SalesServices.updateSaleQuantity(1, 2, 30);
    expect(updateSaleModelMock.calledOnce).to.be.equal(true);
    expect(updatedSale).to.be.an('object');
    expect(updatedSale).to.deep.equal(updateSaleQuantityFromService);
  });
});
