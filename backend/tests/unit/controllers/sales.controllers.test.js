const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { SalesServices } = require('../../../src/services');
const {
  getAllSalesFromService,
  getSaleByIdFromService,
} = require('../mocks/services/sales.services.mocks');
const { SalesControllers } = require('../../../src/controllers');

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
});
