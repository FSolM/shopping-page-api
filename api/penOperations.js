let pen = require('../model/cart').cart.pen;

module.exports = (app) => {
  app.get('/api/cart/pen', (req, res) => {
    res.send(pen);
  });

  app.get('/api/cart/pen/quantity', (req, res) => {
    res.send(pen.quantity.toString());
  });

  app.post('/api/cart/pen/add', (req, res) => {
    try {
      pen.quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the pen quantity');
      res.send({ status: false });
    }
  });

  app.post('/api/cart/pen/remove', (req, res) => {
    try {
      if (pen.quantity > 0) pen.quantity -= 1;

      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the pen quantity');
      res.send({ status: false });
    }
  });
};
