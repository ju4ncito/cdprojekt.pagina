/**
 * Product.js
 *
 * @description :: Server-side actions for handling products.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  attributes : {
    name:{
      type:'string',
      required: true,
    },

    description:{
      type:'string',
    },

    price:{
      type:'number',
      required: true,
    },

    image:{
      type:'string',
    },

    //Asociacion

    comprados: {
      collection: 'cart',
      via: 'products'
    }
  }

};
