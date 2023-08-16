const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../utils/statusHTTP');

const validateCreateProduct = (req, res, next) => {
  const product = req.body;
  if (!product || !product.name) {
    return res.status(BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (product.name.length < 5) {
    return res
      .status(UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  validateCreateProduct,
};
