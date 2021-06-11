let shirt = require('../model/cart').cart.shirt;

module.exports = (app) => {
  app.get('/api/cart/shirt', (req, res) => {
    res.send(shirt);
  });

  app.get('/api/cart/shirt/quantity', (req, res) => {
    res.send(shirt.quantity.toString());
  });

  app.post('/api/cart/shirt/add', (req, res) => {
    try {
      shirt.quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });

  app.post('/api/cart/shirt/remove', (req, res) => {
    try {
      if (shirt.quantity > 0) shirt.quantity -= 1;

      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });
};
