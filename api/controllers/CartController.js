/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions

 */

module.exports = {
  add: async function (req, res) {
    const { pid, cant } = req.allParams();
    console.log({ pid, cant });

    if (!req.session.cart) {
      req.session.cart = {
        quantity: 0,
        owner: req.session.user,
        products: [],
        total: 0,
      };
    }

    req.session.cart.products.push(
      {
        pid: pid,
        cant: cant }
    );
    res.json({ msg: 'OK' });
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
  },
  comprar: async function (req, res) {
    const { pid } = req.allParams();

    let cart = {};
    if (req.session.cart) {
      cart.quantity = req.session.cart.quantity;
      cart.owner = req.session.cart.owner;
      cart.total = 0.0;
      cart.products = [];

      for (let p of req.session.cart.products) {
        const product = await Product.findOne({id: p.pid});

        cart.products.push({
          name: product.name,
          cant: p.cant,
          price: product.price,
        });

        cart.quantity +=1;
        cart.total += product.price;
        req.session.cart.quantity +=1;
        req.session.cart.total += product.price;
      }
    }
    try {
      await Cart.create(cart);
      delete req.session.cart;
    } catch (e) {
      console.log(e);
    }
    if (req.session.cart) {
      req.session.cart.products = [];
    }
    res.view('pages/checkout', {cart: cart});
  },
  showCart: async function (req, res) {
    let cart = {};
    if (req.session.cart) {
      cart.quantity = req.session.cart.quantity;
      cart.products = [];
      cart.total = 0.0;
      for (let p of req.session.cart.products) {
        const product = await Product.findOne({id: p.pid});

        cart.products.push({
          name: product.name,
          cant: p.cant,
          price: product.price,
        });

        cart.quantity +=1;
        cart.total += product.price;
      }
    }

    res.view('pages/shoppingcart', {cart: cart});
  },

  removeProducts: async function (req, res) {

    if (req.session.cart) {
      req.session.cart.products = [];
    }

    res.view('pages/shoppingcart', {cart: req.session.cart});
  }
};
