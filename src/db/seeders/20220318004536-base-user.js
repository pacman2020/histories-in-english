'use strict';
const brcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {

    const newpassword = brcrypt.hashSync('admin', 10);

    await queryInterface.bulkInsert('users', [{
      name: 'jonh',
      email: "jonh@gmail.com",
      password: newpassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
