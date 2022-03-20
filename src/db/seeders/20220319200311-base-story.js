'use strict';


let storyfull = `1. The flag of the USA
Jackson Roger lives in the USA. He is 8
years old. He loves his country. He likes
painting flags. He loves to paint the USA
flag because it has stars. It has three
colors: red, blue and white. There are 50
stars on the flag. There are 13 stripes, 7
red and 6 white. Jackson has put many
flags in his room. His room looks beautiful.
His friends love to paint flags too. The USA
flag looks attractive. The stripes go from
left to right and up and down. Everyone
should love their country. A flag is used as
a symbol. Jackson likes studying about
flags of different countries. He wins many
painting competitions. He is appreciated by
his parents and teachers`

module.exports = {

  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('stories', [{
        title: 'teste 4',
        story: storyfull,
        userId: 2,
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

    } catch (error) {
      console.log(error);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stories', null, {});
  }
};
