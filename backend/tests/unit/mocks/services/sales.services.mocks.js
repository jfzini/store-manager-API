const mockDate = '2023-08-14T20:24:15.000Z';

const getAllSalesFromService = [
  {
    date: mockDate, // THIS MUST BE CHANGED BACK TO STRING AFTER PROJECT IS DONE
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    date: mockDate, // THIS MUST BE CHANGED BACK TO STRING AFTER PROJECT IS DONE
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
  {
    date: mockDate, // THIS MUST BE CHANGED BACK TO STRING AFTER PROJECT IS DONE
    saleId: 2,
    productId: 3,
    quantity: 15,
  },
];

const getSaleByIdFromService = [
  {
    date: mockDate, // THIS MUST BE CHANGED BACK TO STRING AFTER PROJECT IS DONE
    productId: 1,
    quantity: 5,
  },
  {
    date: mockDate, // THIS MUST BE CHANGED BACK TO STRING AFTER PROJECT IS DONE
    productId: 2,
    quantity: 10,
  },
];

const createdSaleFromService = {
  id: 4,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const updateSaleQuantityFromService = {
  date: new Date('2023-08-14T20:24:15.000Z'), // THIS MUST BE CHANGED BACK TO STRING AFTER PROJECT IS DONE
  productId: 2,
  quantity: 30,
  saleId: 1,
};

module.exports = {
  getAllSalesFromService,
  getSaleByIdFromService,
  createdSaleFromService,
  updateSaleQuantityFromService,
};
