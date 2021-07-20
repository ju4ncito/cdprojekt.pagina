/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
  */


module.exports = {
  add: async function (req, res) {
    const ventas = await Sale.find();
    console.log(req.session.sale);
    res.view('pages/sale', {sale: ventas});
  },
  showData: async function (req, res) {
    res.view('pages/sale', {sale: sale});
  },
};
