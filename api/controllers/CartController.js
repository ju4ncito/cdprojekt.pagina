/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions


module.exports = {
  newCart: async function (req, res) {
    const { pid, cant } = req.allParams();
    console.log({ pid, cant });

    if (!req.session.cart) {
      req.session.cart = {
        quantity: 0,
        owner: req.session.user,
        sale: req.session.sale,
        products: [],
      };
    }

    req.session.cart.products.push(
      { pid: pid, cant: cant }
    );
    res.json(req.session.cart);
  },

  del: async function (req, res) {
    const { pid } = req.allParams();

    if (!req.session.cart) {
      req.session.cart = {
        products: []
      };
    }

    req.session.cart.products = req.session.cart.products.filter(p => p.pid !== pid);
    res.json(req.session.cart);
  }
};
 */
