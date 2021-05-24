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

  sails.argon2 = require('argon2'); //Controla que este argon
  if (await User.count() > 0) {
    console.log(' no vacia');
    return;
  } //controla si base de datos de usuarios, sino los crea

  console.log('vacia');
  await User.createEach([
    {
      email: 'ry@example.com',
      name: 'Ryan Dahl',
      password: await sails.argon2.hash('1234'),
    },
    {
      email: 'juan@pepe.com',
      name: 'Juan Jose',
      password: await sails.argon2.hash('4321'),
    },
  ]);

};
