/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  sails.argon2 = require('argon2');
  if (await User.count() > 0) {
    console.log('馃敟 No Vacia');
    return;
  }

  console.log('馃敟 Vacia');
  await User.createEach([
    {
      email: 'ry@example.com',
      name: 'Ryan Dahl',
      password: await sails.argon2.hash('1234'),
      type: 'admin'
    },
    {
      email: 'juan@pepe.com',
      name: 'Juan Jose',
      password: await sails.argon2.hash('4321'),
      type: 'user'
    },
  ]);
  await Product.createEach([
    {
      name: 'ETH mining rig',
      description: 'Mining Case para la construcci贸n de plataformas de miner铆a Ethereum que incluyen placa base, SSD, RAM, ventiladores de refrigeraci贸n sin fuente de alimentaci贸n. El espacio de la ranura de la GPU de este producto es de 55 mm y el grosor de su' +
        ' tarjeta gr谩fica no debe exceder los 50 mm para garantizar la disipaci贸n de calor normal de la tarjeta gr谩fica.',
      price: 788.00,
      image: 'https://images-na.ssl-images-amazon.com/images/I/61ETO-yfD2L._AC_SL1000_.jpg'
    },
    {
      name: 'MSI Geforce Rtx 3070 8GB',
      description: 'Con una velocidad de memoria de 14000 MHz los datos del procesador central se van a traducir en informaci贸n comprensible en tan solo un abrir y cerrar de ojos; decodificar谩 tantos ciclos por segundo que har谩 m谩s ' +
        'efectiva la transmisi贸n de datos a otros componentes. Con esta cualidad, el equipo ganar谩 agilidad y eficiencia.',
      price: 1099.66,
      image: 'https://www.eagletechnology.com.ar/wp-content/uploads/2021/06/1608575441_IMG_1436325.jpg'
    },
  ]);
};
