const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const app = require('../../src/app');
const connection = require('../../src/configs/connection');
const {
  getAllSalesFromDB,
  getSaleByIdFromDB,
  createSaleFromDB,
  insertSaleInDB,
  updateSaleQuantityFromDB,
} = require('../unit/mocks/models/sales.models.mocks');
const {
  getAllSalesFromService,
  getSaleByIdFromService,
} = require('../unit/mocks/services/sales.services.mocks');
const { getProductByIdFromModel, getProductByIdFromDB } = require('../unit/mocks/models/products.models.mocks');
const {
  createSuccessfulSaleBodyMock,
  missingProductIdBodyMock,
  missingQuantityBodyMock,
  NaNQuantityBodyMock,
  zeroQuantityBodyMock,
} = require('../unit/mocks/utils/middlewares.utils.mocks');
const { updateSaleQuantityIntegrationMock } = require('./mocks/integration.mocks');

const { expect } = chai;

chai.use(sinonChai);
chai.use(chaiHttp);

describe('/sales methods should work as intended', function () {
  const genericEndpoint = '/sales';
  const idEndpoint = '/sales/1';

  describe('GET endpoints', function () {
    afterEach(async function () {
      sinon.restore();
    });

    it('GET /sales should return an array with all sales', async function () {
      sinon.stub(connection, 'execute').resolves(getAllSalesFromDB);
      const response = await chai.request(app).get(genericEndpoint);
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.deep.equal(getAllSalesFromService);
    });

    it('GET /sales/:id should return an array with the respective sale\'s data', async function () {
      sinon.stub(connection, 'execute').resolves(getSaleByIdFromDB);
      const response = await chai.request(app).get(idEndpoint);
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.deep.equal(getSaleByIdFromService);
    });

    it('GET /sales/:id should return an error if the sale doesn\'t exist in the database', async function () {
      sinon.stub(connection, 'execute').resolves([[], null]);
      const response = await chai.request(app).get(idEndpoint);
      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: 'Sale not found' });
    });
  });

  describe('POST endpoints', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('POST /sales should return an object with the new sale\'s data', async function () {
      sinon.stub(Promise, 'all').resolves([getProductByIdFromModel, getProductByIdFromModel]);
      sinon
        .stub(connection, 'execute')
        .onCall(0)
        .resolves(getProductByIdFromModel)
        .onCall(1)
        .resolves(getProductByIdFromModel)
        .onCall(2)
        .resolves(insertSaleInDB)
        .onCall(3)
        .resolves(createSaleFromDB);

      const response = await chai.request(app).post(genericEndpoint).send(createSuccessfulSaleBodyMock);
      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ id: 3, itemsSold: createSuccessfulSaleBodyMock });
    });

    it('POST /sales should return an error if some productId doesn\'t exist in the database', async function () {
      sinon.stub(Promise, 'all').resolves([getProductByIdFromModel, undefined]);
      const response = await chai.request(app).post(genericEndpoint).send(createSuccessfulSaleBodyMock);
      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: 'Product not found' });
    });

    it('POST /sales should return an error if req.body doesn\'t have a "productId" property on all objects', async function () {
      const response = await chai.request(app).post(genericEndpoint).send(missingProductIdBodyMock);
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal({ message: '"productId" is required' });
    });

    it('POST /sales should return an error if req.body doesn\'t have a "quantity" property on all objects', async function () {
      const response = await chai.request(app).post(genericEndpoint).send(missingQuantityBodyMock);
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal({ message: '"quantity" is required' });
    });

    it('POST /sales should return an error if "quantity" property isn\'t a number on all objects', async function () {
      const response = await chai.request(app).post(genericEndpoint).send(NaNQuantityBodyMock);
      expect(response).to.have.status(400);
      expect(response.body).to.deep.equal({ message: '"quantity" must be a number' });
    });

    it('POST /sales should return an error if "quantity" isn\'t greater than or equal to 1', async function () {
      const response = await chai.request(app).post(genericEndpoint).send(zeroQuantityBodyMock);
      expect(response).to.have.status(422);
      expect(response.body).to.deep.equal({
        message: '"quantity" must be greater than or equal to 1',
      });
    });
  });

  describe('PUT endpoints', function () {
    afterEach(function () {
      sinon.restore();
    });

    const putQntEndpoint = '/sales/1/products/2/quantity';

    it('PUT /sales/:saleId/products/:productId/quantity should return an object with the updated product_sale', async function () {
      this.clock = sinon.useFakeTimers({
        now: new Date('2023-08-14T20:24:15.000Z'),
      });
      sinon
        .stub(connection, 'execute')
        .onCall(0)
        .resolves(getSaleByIdFromDB)
        .onCall(1)
        .resolves(getProductByIdFromDB)
        .onCall(2)
        .resolves(updateSaleQuantityFromDB);

      const response = await chai.request(app).put(putQntEndpoint).send({ quantity: 30 });
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal(updateSaleQuantityIntegrationMock);
    });

    it('PUT /sales/:saleId/products/:productId/quantity should return an error if sale is not found', async function () {
      sinon
        .stub(connection, 'execute')
        .onCall(0)
        .resolves([[], null])
        .onCall(1)
        .resolves(getProductByIdFromDB)
        .onCall(2)
        .resolves(updateSaleQuantityFromDB);

      const response = await chai.request(app).put(putQntEndpoint).send({ quantity: 30 });
      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: 'Sale not found' });
    });

    it('PUT /sales/:saleId/products/:productId/quantity should return an error if product is not found', async function () {
      sinon
        .stub(connection, 'execute')
        .onCall(0)
        .resolves(getSaleByIdFromDB)
        .onCall(1)
        .resolves([[], null])
        .onCall(2)
        .resolves(updateSaleQuantityFromDB);

      const response = await chai.request(app).put(putQntEndpoint).send({ quantity: 30 });
      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: 'Product not found in sale' });
    });

    it('PUT /sales/:saleId/products/:productId/quantity should return an error if quantity is not a property of req.body', async function () {
      this.clock = sinon.useFakeTimers({
        now: new Date('2023-08-14T20:24:15.000Z'),
      });
      sinon
        .stub(connection, 'execute')
        .onCall(0)
        .resolves(getSaleByIdFromDB)
        .onCall(1)
        .resolves(getProductByIdFromDB)
        .onCall(2)
        .resolves(updateSaleQuantityFromDB);

      const response = await chai.request(app).put(putQntEndpoint).send({ quantities: 30 });
      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: '"quantity" is required' });
    });

    it('PUT /sales/:saleId/products/:productId/quantity should return an error if quantity is not a number', async function () {
      this.clock = sinon.useFakeTimers({
        now: new Date('2023-08-14T20:24:15.000Z'),
      });
      sinon
        .stub(connection, 'execute')
        .onCall(0)
        .resolves(getSaleByIdFromDB)
        .onCall(1)
        .resolves(getProductByIdFromDB)
        .onCall(2)
        .resolves(updateSaleQuantityFromDB);

      const response = await chai.request(app).put(putQntEndpoint).send({ quantity: 'string' });
      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: '"quantity" must be a number' });
    });
  });
});
