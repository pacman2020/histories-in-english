'use strict';


const brcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {

    try {
      const newpassword = brcrypt.hashSync('admin', 10);

      await queryInterface.bulkInsert('users', [{
        userName: 'admin',
        email: "admin@gmail.com",
        password: newpassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

    } catch (error) {
      console.log(error);
    }
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
