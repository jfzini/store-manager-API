const validateCreateProduct = (req, res, next) => {
  const product = req.body;
  if (!product || !product.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (product.name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  validateCreateProduct,
};
