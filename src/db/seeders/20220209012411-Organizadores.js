'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        "Organizadores",
        [
          {
            code: 1,
            name: "Empresa"
          },
          {
            code: 2,
            name: "Universidade"
          }
        ]
      )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bullDelete("Organizadores", null, {})
  },
};
