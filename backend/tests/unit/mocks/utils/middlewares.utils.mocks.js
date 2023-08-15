const createSuccessfulSaleBodyMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const missingProductIdBodyMock = [
  {
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const missingQuantityBodyMock = [
  {
    productId: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const NaNQuantityBodyMock = [
  {
    productId: 1,
    quantity: 'test',
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const zeroQuantityBodyMock = [
  {
    productId: 1,
    quantity: 0,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

module.exports = {
  createSuccessfulSaleBodyMock,
  missingProductIdBodyMock,
  missingQuantityBodyMock,
  NaNQuantityBodyMock,
  zeroQuantityBodyMock,
};
