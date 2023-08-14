const { expect } = require('chai');
const sinon = require('sinon');
const { SalesModels } = require('../../../src/models');
const connection = require('../../../src/configs/connection');

// mocks
const { getAllSalesFromDB, getAllSalesFromModel, getSaleByIdFromDB, getSaleByIdFromModel } = require('../mocks/models/sales.models.mocks');

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
});
