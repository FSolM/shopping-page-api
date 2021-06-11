/**
 * This is the model of the cart. It contains all the items that are sold in the
 * webpage. THe prices can easily be modified and new items can be added without
 * any issue. Just remember to update the price fetching functions!
 */

const cart = {
  shirt: { quantity: 0, price: 2000 },
  pen: { quantity: 0, price: 500 },
  mug: { quantity: 0, price: 750 }
};

exports.cart = cart;
