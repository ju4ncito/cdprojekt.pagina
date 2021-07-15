/**
 * Cart.js
 *
 * @description :: Server-side actions for handling carts.
 * @help        :: See https://sailsjs.com/docs/concepts/actions

 */
module.exports = {

  attributes : {
    quantity: {
      type: 'number',
      required: true
    },

    //Asociacion
    owner: {
      model: 'user'
    },

    sale:{
      model:'sale',
      via: 'cartSale'
    },

    products: {
      collection: 'product',
      via: 'comprados'
    }
  }
};

