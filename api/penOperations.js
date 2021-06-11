let pen = require('../model/cart').cart.pen;

module.exports = (app) => {
  /**
   * GET function that retrieves the whole pen object
   * 
   * @returns object
  */
  app.get('/api/cart/pen', (req, res) => {
    res.send(pen);
  });

  /**
   * GET function that returns the total amount of pens in the cart; it returns them as a string
   * 
   * @returns string
   */
  app.get('/api/cart/pen/quantity', (req, res) => {
    res.send(pen.quantity.toString());
  });

  /**
   * This POST method adds one pen to the total of pens saved in the cart, then returns a JSON response
   * with a true status. If there's any problem during the transaction, it returns a JSON response with
   * false as its value
   * 
   * @returns JSON
   */
  app.post('/api/cart/pen/add', (req, res) => {
    try {
      pen.quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the pen quantity');
      res.send({ status: false });
    }
  });

  /**
   * POST method that removes one item from the total of pens in the cart; if the transaction is completed
   * it returns a JSON object with a true status. If there's any problem during the transaction, or there
   * are 0 or less (how can it be less than 0 is beyond me) pens in the cart it will return a JSON status
   * of false
   * 
   * @returns JSON
   */
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
