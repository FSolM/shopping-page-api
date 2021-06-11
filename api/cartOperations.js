let cart = require('../model/cart')["cart"];

module.exports = (app) => {
  app.get('/api/cart', (req, res) => {
    res.send(cart);
  });

  app.get('/api/cart/total', (req, res) => {
    let total = cart["shirt"].quantity * cart["shirt"].price;
    total += cart["pen"].quantity * cart["pen"].price;
    total += cart["mug"].quantity * cart["mug"].price;

    res.send(total / 100);
  });
};
