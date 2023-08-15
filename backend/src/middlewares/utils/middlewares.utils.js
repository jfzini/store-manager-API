const productIdExists = (body) => body.every(({ productId }) => productId);

const productQuantityExists = (body) => body.every(({ quantity }) => quantity !== undefined);

const productQuantityIsNumber = (body) =>
  body.every(({ quantity }) => !Number.isNaN(parseInt(quantity, 10)));

const productQuantityIsGreaterThanZero = (body) =>
  body.every(({ quantity }) => parseInt(quantity, 10) > 0);

module.exports = {
  productIdExists,
  productQuantityExists,
  productQuantityIsNumber,
  productQuantityIsGreaterThanZero,
};
