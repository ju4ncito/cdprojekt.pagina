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
    console.log('🔥 No Vacia');
    return;
  }

  console.log('🔥 Vacia');
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
};
