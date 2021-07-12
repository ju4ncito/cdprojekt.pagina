/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string',
    },
    email:{
      type: 'string',
      required: true,
    },
    password:{
      type: 'string',
      required: true,
    },
    type:{
      type: 'string',
      required: true,
    },
    //Asociacion

    cart: {
      collection:'cart',
      via: 'owner'
    },

  },
};

