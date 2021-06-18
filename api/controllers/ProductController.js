/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  add: async function (req, res) {
    const { name, price, image, description } = req.allParams()

    if (price < 0) {
      res.view('pages/add_product', { msg: 'El precio no es un numero' })
    }

    const p = await Product.create(
      {
        name: name,
        description: description,
        price: price,
        image: image
      }
    ).fetch()

    console.log(p)
    res.view('pages/add_product', { msg: 'Producto creado <a href="producto/' + p.id + '">Producto</a>' })
  },
  showForm: async function (req, res) {
    res.view('pages/add_product', { msg: null })
  },
  addCart: async function (req, res) {
    const { pid, cant } = req.allParams()
    console.log({ pid, cant })
    if (!req.session.cart) {
      req.session.cart = {
        products: []
      }
    }

    req.session.cart.products.push(
      { pid: pid, cant: cant }
    )
    res.json(req.session.cart)
  },
  delCart: async funcftion (req, res) {
    const { pid } = req.allParams()

    if (!req.session.cart) {
      req.session.cart = {
        products: []
      }
    }

    req.session.cart.products = req.session.cart.products.filter(p => p.pid !== pid)
    res.json(req.session.cart)
  }
}
