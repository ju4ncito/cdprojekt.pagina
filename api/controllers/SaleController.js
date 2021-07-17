/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
  */


module.exports = {
  add: async function (req, res) {
    if(!req.session.sale){
      if (req.session.cart){
        req.session.sale = {
          amount: req.session.cart.total,
          iva: 21,
          cartSale: req.session.cart,
        };
      }
    }
    console.log(req.session.sale);
    res.view('pages/sale', {sale: req.session.sale});
  },
  showData: async function (req, res) {
    res.view('pages/sale', {sale: sale});
  },
};
