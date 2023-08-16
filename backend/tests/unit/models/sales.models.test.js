const { expect } = require('chai');
const sinon = require('sinon');

const { SalesModels } = require('../../../src/models');
const connection = require('../../../src/configs/connection');

// mocks
const {
  getAllSalesFromDB,
  getAllSalesFromModel,
  getSaleByIdFromDB,
  getSaleByIdFromModel,
  insertSaleInDB,
  createSaleFromDB,
  saleDataMock,
  createSaleFromModel,
  deleteSaleFromDB,
  deleteSaleFromModel,
  updateSaleQuantityFromDB,
  updateSaleQuantityFromModel,
} = require('../mocks/models/sales.models.mocks');

describe('Sales Models unit tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAllsales should return an array of all sales', async function () {
    sinon.stub(connection, 'execute').resolves(getAllSalesFromDB);
    const sales = await SalesModels.getAllSales();
    expect(sales).to.be.an('array');
    expect(sales).to.have.lengthOf(3);
    expect(sales).to.deep.equal(getAllSalesFromModel);
  });

  it('getSaleById should return an array with the sale data', async function () {
    sinon.stub(connection, 'execute').resolves(getSaleByIdFromDB);
    const sale = await SalesModels.getSaleById(1);
    expect(sale).to.be.an('array');
    expect(sale).to.have.lengthOf(2);
    expect(sale).to.deep.equal(getSaleByIdFromModel);
  });

  it('insertSale should return the id of the inserted sale', async function () {
    sinon.stub(connection, 'execute').resolves(insertSaleInDB);
    const sale = await SalesModels.insertSale('2023-08-14T20:24:15.000Z');
    expect(sale).to.be.equal(insertSaleInDB[0].insertId);
  });

  it('createSale should return an object with the insertion data', async function () {
    sinon.stub(connection, 'execute').resolves(createSaleFromDB);
    const sale = await SalesModels.createSale(saleDataMock);
    expect(sale).to.be.an('object');
    expect(sale).to.deep.equal(createSaleFromModel);
  });

  it('deleteSale should return an object with the deletion data', async function () {
    sinon.stub(connection, 'execute').resolves(deleteSaleFromDB);
    const sale = await SalesModels.deleteSale(1);
    expect(sale).to.be.an('object');
    expect(sale).to.deep.equal(deleteSaleFromModel);
  });

  it('updateSaleQuantity should return an object with the deletion data', async function () {
    sinon.stub(connection, 'execute').resolves(updateSaleQuantityFromDB);
    const sale = await SalesModels.updateSaleQuantity(1, 2, 30);
    expect(sale).to.be.an('object');
    expect(sale).to.deep.equal(updateSaleQuantityFromModel);
  });
});
