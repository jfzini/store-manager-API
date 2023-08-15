const productIdExists = (body) => body.every(({ productId }) => productId);

const productQuantityExists = (body) => body.every(({ quantity }) => quantity !== undefined);

const productQuantityIsNumber = (body) =>
  body.every(({ quantity }) => !Number.isNaN(parseInt(quantity, 10)));

const productQuantityIsGreaterThanZero = (body) =>
  body.every(({ quantity }) => parseInt(quantity, 10) > 0);

const validateCreateSaleBody = (req, res, next) => {
  const { body } = req;
  if (!body || !Array.isArray(body)) {
    return res.status(422).json({ message: 'req.body must be an array of objects' });
  }

  next();
};

const validateProductId = (req, res, next) => {
  if (!productIdExists(req.body)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const validateProductQuantity = (req, res, next) => {
  if (!productQuantityExists(req.body)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (!productQuantityIsNumber(req.body)) {
    return res.status(400).json({ message: '"quantity" must be a number' });
  }
  if (!productQuantityIsGreaterThanZero(req.body)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = [validateCreateSaleBody, validateProductId, validateProductQuantity];
