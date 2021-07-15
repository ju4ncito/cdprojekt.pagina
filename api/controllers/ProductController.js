/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  add: async function (req, res) {
    const { name, price, image, description } = req.allParams();

    if (price < 0) {
      res.view('pages/add_product', { msg: 'El precio no es un numero' });
    }


    const p = await Product.create(
      {
        name: name,
        description: description,
        price: price,
        image: image
      }
    ).fetch();

    console.log(p);
    res.view('pages/add_product', { msg: 'Producto creado con ID' + p.id });
  },


  productView: async function (req, res) {
    res.view('pages/add_product', { 'msg': null });
  },


  list: async function (req, res) {

    const productos = await Product.find();

    res.view('pages/product', { product: productos});
  }

};
