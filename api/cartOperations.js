let cart = require('../model/cart')["cart"];

/**
 * This function will check for the shirt promotion thingy. If the user's buying
 * three or more shirts it will give them a 25% discount. If not, it'll return
 * the total price of the shirts in the cart.
 * 
 * @param integer
 * @param integer
 * 
 * @returns integer
 */
const shirtPromotion = (quantity, price) => {
  if (quantity >= 3) {
    let total = quantity * price;

    return total * 0.75;
  }

  return quantity * price;
};

/**
 * This method will apply a 2x1 promotion to pens. It will floor the total of pens in
 * the cart divided by two; then, it'll subtract that amount to the total of pens in
 * the cart.
 * 
 * @param integer
 * @param integer
 * 
 * @returns integer
 */
const penPromotion = (quantity, price) => {
  const freePens = Math.floor(quantity / 2);

  return (quantity - freePens) * price;
};

module.exports = (app) => {
  /**
   * This GET call will return the whole cart
   * 
   * @returns object
   */
  app.get('/api/cart', (req, res) => {
    res.send(cart);
  });

  /**
   * This GET call will return the total price of the items in the cart with all the
   * applicable promotions in a string format.
   * 
   * @returns string
   */
  app.get('/api/cart/total', (req, res) => {
    let total = shirtPromotion(cart.shirt.quantity, cart.shirt.price);
    total += penPromotion(cart.pen.quantity, cart.pen.price);
    total += cart.mug.quantity * cart.mug.price;

    res.send((total / 100).toString());
  });

  /**
   * This POST function will clear the whole cart of items and return a status of true.
   * If there's any issues during the transaction, it will return a status of false.
   * 
   * @returns JSON
   */
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
