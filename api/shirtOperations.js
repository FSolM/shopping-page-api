let cart = require('../model/cart')["cart"];

module.exports = (app) => {
  app.get('/api/cart/shirt', (req, res) => {
    res.send(cart["shirt"]);
  });

  app.post('/api/cart/shirt/add', (req, res) => {
    try {
      cart["shirt"].quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });

  app.post('/api/cart/shirt/remove', (req, res) => {
    try {
      cart["shirt"].quantity -= 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });
};
