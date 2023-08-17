const express = require('express');
const { productsRouter } = require('./routes');
const salesRouter = require('./routes/sales.routes');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.redirect('https://documenter.getpostman.com/view/29177531/2s9Y5R3SWC');
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;
