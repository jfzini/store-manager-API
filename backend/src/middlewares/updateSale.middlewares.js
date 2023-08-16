const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../utils/statusHTTP');

const validateUpdateQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (quantity === undefined) {
    return res
      .status(BAD_REQUEST)
      .json({ message: '"quantity" is required' });
  }
  if (Number.isNaN(parseInt(quantity, 10))) {
    return res
      .status(BAD_REQUEST)
      .json({ message: '"quantity" must be a number' });
  }
  if (parseInt(quantity, 10) <= 0) {
    return res
      .status(UNPROCESSABLE_ENTITY)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = {
  validateUpdateQuantity,
};