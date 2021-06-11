let cart = require('../model/cart')["cart"];

module.exports = (app) => {
  app.get('/api/cart/mug', (req, res) => {
    res.send(cart["mug"]);
  });

  app.post('/api/cart/mug/add', (req, res) => {
    try {
      cart["mug"].quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });

  app.post('/api/cart/mug/remove', (req, res) => {
    try {
      cart["mug"].quantity -= 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });
};
