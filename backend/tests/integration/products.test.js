const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const app = require('../../src/app');
const connection = require('../../src/configs/connection');
const {
  getAllProductsFromDB,
  getAllProductsFromModel,
  getProductByIdFromDB,
  getProductByIdFromModel,
  createProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
  searchProductFromDB,
  searchProductFromModel,
} = require('../unit/mocks/models/products.models.mocks');

const { expect } = chai;

chai.use(sinonChai);
chai.use(chaiHttp);

describe('/products methods should work as intented', function () {
  const fullNameProduct = { name: 'Teste' };
  const shortNameProduct = { name: 'Test' };
  const genericEndpoint = '/products';
  const idEndpoint = '/products/1';

  describe('GET endpoints', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('GET /products should return an array with all products', async function () {
      sinon.stub(connection, 'execute').resolves(getAllProductsFromDB);
      const response = await chai.request(app).get(genericEndpoint);
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.deep.equal(getAllProductsFromModel);
    });

    it('GET /products/:id should return an object with the specified product', async function () {
      sinon.stub(connection, 'execute').resolves(getProductByIdFromDB);
      const response = await chai.request(app).get(idEndpoint);
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal(getProductByIdFromModel);
    });

    it('GET /products/:id should return an error if the product does not exist', async function () {
      sinon.stub(connection, 'execute').resolves([[undefined]]);
      const response = await chai.request(app).get(idEndpoint);
      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: 'Product not found' });
    });

    it('GET /products/search?q= should return an array with all products found', async function () {
      sinon.stub(connection, 'execute').resolves(searchProductFromDB);
      const response = await chai.request(app).get('/products/search?q=artelo');
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.deep.equal(searchProductFromModel);
    });
  });

  describe('POST endpoints', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('POST /products should return an object with the created product', async function () {
      sinon.stub(connection, 'execute').resolves(createProductFromDB);
      const productObj = fullNameProduct;
      const response = await chai.request(app).post(genericEndpoint).send(productObj);
      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ id: 4, name: 'Teste' });
    });

    it('POST /products should return an error if the req body doesn\'t have a name property', async function () {
      const productObj = {};
      const response = await chai.request(app).post(genericEndpoint).send(productObj);
      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: '"name" is required' });
    });

    it('POST /products should return an error if the req body "name" is shorter than 5 chars', async function () {
      const productObj = shortNameProduct;
      const response = await chai.request(app).post(genericEndpoint).send(productObj);
      expect(response).to.have.status(422);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({
        message: '"name" length must be at least 5 characters long',
      });
    });
  });

  describe('PUT endpoints', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('PUT /products/:id should return an object with the updated product', async function () {
      sinon
        .stub(connection, 'execute')
        .onFirstCall()
        .resolves(getProductByIdFromDB)
        .onSecondCall()
        .resolves(updateProductFromDB);
      const productObj = fullNameProduct;
      const response = await chai.request(app).put(idEndpoint).send(productObj);
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ id: 1, name: 'Teste' });
    });

    it('PUT /products/:id should return an error if the req body "name" is shorter than 5 chars', async function () {
      const productObj = shortNameProduct;
      const response = await chai.request(app).put(idEndpoint).send(productObj);
      expect(response).to.have.status(422);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({
        message: '"name" length must be at least 5 characters long',
      });
    });

    it('PUT /products/:id should return an an error if the req body doesn\'t have a name property', async function () {
      const productObj = {};
      const response = await chai.request(app).put(idEndpoint).send(productObj);
      expect(response).to.have.status(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: '"name" is required' });
    });

    it('PUT /products/:id should return an error if the product doesn\'t exist in the database', async function () {
      sinon
        .stub(connection, 'execute')
        .onFirstCall()
        .resolves([[undefined]])
        .onSecondCall()
        .resolves(updateProductFromDB);
      const productObj = fullNameProduct;
      const response = await chai.request(app).put(idEndpoint).send(productObj);
      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: 'Product not found' });
    });
  });

  describe('DELETE endpoints', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('DELETE /products/:id should return an object with the deleted product', async function () {
      sinon
        .stub(connection, 'execute')
        .onFirstCall()
        .resolves(getProductByIdFromDB)
        .onSecondCall()
        .resolves(deleteProductFromDB);
      const response = await chai.request(app).delete(idEndpoint);
      expect(response).to.have.status(204);
    });

    it('DELETE /products/:id should return an error if product doesn\'t exist in the database', async function () {
      sinon
        .stub(connection, 'execute')
        .onFirstCall()
        .resolves([[undefined]])
        .onSecondCall()
        .resolves(deleteProductFromDB);
      const response = await chai.request(app).delete(idEndpoint);
      expect(response).to.have.status(404);
      expect(response.body).to.be.an('object');
      expect(response.body).to.deep.equal({ message: 'Product not found' });
    });
  });
});
