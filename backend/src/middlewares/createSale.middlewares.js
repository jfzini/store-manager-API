const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('../utils/statusHTTP');
const {
  productIdExists,
  productQuantityExists,
  productQuantityIsNumber,
  productQuantityIsGreaterThanZero,
} = require('./utils/middlewares.utils');

const validateCreateSaleBody = (req, res, next) => {
  const { body } = req;
  if (!body || !Array.isArray(body)) {
    return res
      .status(UNPROCESSABLE_ENTITY)
      .json({ message: 'req.body must be an array of objects' });
  }

  next();
};

const validateProductId = (req, res, next) => {
  if (!productIdExists(req.body)) {
    return res
      .status(BAD_REQUEST)
      .json({ message: '"productId" is required' });
  }

  next();
};

const validateProductQuantity = (req, res, next) => {
  if (!productQuantityExists(req.body)) {
    return res
      .status(BAD_REQUEST)
      .json({ message: '"quantity" is required' });
  }
  if (!productQuantityIsNumber(req.body)) {
    return res
      .status(BAD_REQUEST)
      .json({ message: '"quantity" must be a number' });
  }
  if (!productQuantityIsGreaterThanZero(req.body)) {
    return res
      .status(UNPROCESSABLE_ENTITY)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = [
  validateCreateSaleBody,
  validateProductId,
  validateProductQuantity,
];