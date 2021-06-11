let cart = require('../model/cart')["cart"];

module.exports = (app) => {
  app.get('/api/cart/pen', (req, res) => {
    res.send(cart["pen"]);
  });

  app.post('/api/cart/pen/add', (req, res) => {
    try {
      cart["pen"].quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });

  app.post('/api/cart/pen/remove', (req, res) => {
    try {
      cart["pen"].quantity -= 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });
};
