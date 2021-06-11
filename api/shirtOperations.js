let shirt = require('../model/cart').cart.shirt;

module.exports = (app) => {
  /**
   * GET function that retrieves the whole shirt object
   * 
   * @returns object
  */
  app.get('/api/cart/shirt', (req, res) => {
    res.send(shirt);
  });

  /**
   * GET function that returns the total amount of shirts in the cart; it returns them as a string
   * 
   * @returns string
   */
  app.get('/api/cart/shirt/quantity', (req, res) => {
    res.send(shirt.quantity.toString());
  });

  /**
   * This POST method adds one shirt to the total of shirts saved in the cart, then returns a JSON
   * response with a true status. If there's any problem during the transaction, it returns a JSON
   * response with false as its value
   * 
   * @returns JSON
   */
  app.post('/api/cart/shirt/add', (req, res) => {
    try {
      shirt.quantity += 1;
      res.send({ status: true });
    } catch {
      console.log('There was an error while trying to update the shirt quantity');
      res.send({ status: false });
    }
  });

  /**
   * POST method that removes one item from the total of shirts in the cart; if the transaction is
   * completed it returns a JSON object with a true status. If there's any problem during the
   * transaction, or there are 0 or less (how can it be less than 0 is beyond me) shirts in the cart
   * it will return a JSON status of false
   * 
   * @returns JSON
   */
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
