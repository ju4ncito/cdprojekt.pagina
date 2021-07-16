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
      };
    }

    req.session.cart.products.push(
      { pid: pid, cant: cant }
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
      cart.products = [];

      for (let p of req.session.cart.products) {
        for (let i = 0; i < p.cant; i++) {
          cart.products.push(p.pid);
          console.log(p.price);
          cart.quantity +=1;
        }
      }
      try {
        await Cart.create(cart);
        delete req.session.cart;
      } catch (e) {
        console.log(e);
      }
    }
    res.view('pages/shoppingcart', {cart: cart});
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
        });

        cart.quantity +=1;
        cart.total += product.price;
      }
    }

    res.view('pages/shoppingcart', {cart: cart});
  }
};
