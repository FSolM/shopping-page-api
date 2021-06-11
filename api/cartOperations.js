let cart = require('../model/cart')["cart"];

const shirtPromotion = (quantity, price) => {
  if (quantity >= 3) {
    let total = quantity * price;

    return total * 0.75;
  }

  return quantity * price;
};

const penPromotion = (quantity, price) => {
  const freePens = Math.floor(quantity / 2);

  return (quantity - freePens) * price;
};

module.exports = (app) => {
  app.get('/api/cart', (req, res) => {
    res.send(cart);
  });

  app.get('/api/cart/total', (req, res) => {
    let total = shirtPromotion(cart.shirt.quantity, cart.shirt.price);
    total += penPromotion(cart.pen.quantity, cart.pen.price);
    total += cart.mug.quantity * cart.mug.price;

    res.send((total / 100).toString());
  });

  app.post('/api/cart/clear', (req, res) => {
    try {
      cart.shirt.quantity = 0;
      cart.pen.quantity = 0;
      cart.mug.quantity = 0;

      res.send({ status: true });
    } catch {
      res.send({ status: false });
    }
  });
};
