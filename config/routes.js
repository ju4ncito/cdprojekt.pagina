/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /login': { view: 'pages/login' },
  'POST /login': 'UserController.login' ,
  '/logout': 'UserController.logout' ,
  'GET /add_product':'ProductController.productView' ,
  'POST /add_product':'ProductController.add' ,
  'GET /product': 'ProductController.list' ,
  'GET /shoppingcart':'CartController.showCart',
  'POST /cart/add':'CartController.add' ,
  'GET /cart/comprar':'CartController.comprar' ,
  'GET /cart/vaciar':'CartController.removeProducts',
  'GET /sale/add':'SaleController.add',
  'GET /sale/show':'SaleController.add'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
