const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const [
  validateCreateSaleBody,
  validateProductId,
  validateProductQuantity,
] = require('../../../src/middlewares/sales.middlewares');
const {
  createSuccessfulSaleBodyMock,
  missingProductIdBodyMock,
  NaNQuantityBodyMock,
  missingQuantityBodyMock,
  zeroQuantityBodyMock,
} = require('../mocks/utils/middlewares.utils.mocks');

const { expect } = chai;

chai.use(sinonChai);

describe('Sales Middlewares unit tests', function () {
  it('validateCreateSaleBody should call next() if req.body exists and is an array', function () {
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {};
    const next = sinon.stub().returns();

    validateCreateSaleBody(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('validateCreateSaleBody should respond status 422 if req.body doesnt exist', function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateCreateSaleBody(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
  });

  it("validateCreateSaleBody should respond status 422 if req.body isn't an array", function () {
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

    validateCreateSaleBody(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
  });

  it('validateProductId should call next() if "productId" exists in every object in the array', function () {
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {};
    const next = sinon.stub().returns();

    validateProductId(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('validateProductId should respond status 400 if "productId" doesn\'t exist in every object in the array', function () {
    const req = {
      body: missingProductIdBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateProductId(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('validateProductQuantity should call next() if "quantity" exists in every object in the array', function () {
    const req = {
      body: createSuccessfulSaleBodyMock,
    };
    const res = {};
    const next = sinon.stub().returns();

    validateProductQuantity(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('validateProductQuantity should respond status 400 if "quantity" doesn\'t exist in every object in the array', function () {
    const req = {
      body: missingQuantityBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateProductQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('validateProductQuantity should respond status 400 if "quantity" isn\'t a number in every object in the array', function () {
    const req = {
      body: NaNQuantityBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateProductQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
  });

  it('validateProductQuantity should respond status 422 if "quantity" isn\'t greater than zero in every object in the array', function () {
    const req = {
      body: zeroQuantityBodyMock,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub().returns();

    validateProductQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
  });
});
