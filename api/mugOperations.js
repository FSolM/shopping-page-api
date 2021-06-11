let mug = require('../model/cart').cart.mug;

module.exports = (app) => {
  app.get('/api/cart/mug', (req, res) => {
    res.send(mug);
  });

  app.get('/api/cart/mug/quantity', (req, res) => {
    res.send(mug.quantity.toString());
  });

  app.post('/api/cart/mug/add', (req, res) => {
    try {
      mug.quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the mug quantity');
      res.send({ status: false });
    }
  });

  app.post('/api/cart/mug/remove', (req, res) => {
    try {
      if (mug.quantity) mug.quantity -= 1;

      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the mug quantity');
      res.send({ status: false });
    }
  });
};
