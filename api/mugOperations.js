let mug = require('../model/cart').cart.mug;

module.exports = (app) => {
  /**
   * GET function that retrieves the whole mug object
   * 
   * @returns object
  */
  app.get('/api/cart/mug', (req, res) => {
    res.send(mug);
  });

  /**
   * GET function that returns the total amount of mugs in the cart; it returns them as a string
   * 
   * @returns string
   */
  app.get('/api/cart/mug/quantity', (req, res) => {
    res.send(mug.quantity.toString());
  });

  /**
   * This POST method adds one mug to the total of mugs saved in the cart, then returns a JSON response
   * with a true status. If there's any problem during the transaction, it returns a JSON response with
   * false as its value
   * 
   * @returns JSON
   */
  app.post('/api/cart/mug/add', (req, res) => {
    try {
      mug.quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the mug quantity');
      res.send({ status: false });
    }
  });

  /**
   * POST method that removes one item from the total of mugs in the cart; if the transaction is completed
   * it returns a JSON object with a true status. If there's any problem during the transaction, or there
   * are 0 or less (how can it be less than 0 is beyond me) mugs in the cart it will return a JSON status
   * of false
   * 
   * @returns JSON
   */
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
