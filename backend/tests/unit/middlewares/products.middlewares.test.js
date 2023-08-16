const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { validateCreateProduct } = require('../../../src/middlewares/products.middlewares');

const { expect } = chai;

chai.use(sinonChai);

describe('Products Middlewares unit tests', function () {
  it('validateCreateProduct should call next() if req.body is valid', function () {
    const req = {
      body: {
        name: 'Teste',
      },
    };
    const res = {};
    const next = sinon.stub().returns();

    validateCreateProduct(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('validateCreateProduct should respond status 400 if req.body doesnt have a "name" property', function () {
    const req = {
      body: {
        product: 'Teste',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateCreateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });

  it('validateCreateProduct should respond status 422 if req.body.name has less than 5 chars', function () {
    const req = {
      body: {
        name: 'Test',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateCreateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
  });
});
