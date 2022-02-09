'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     "Lotes",
     [
       {
         code: 1,
         name: "Ingresso: Inteiro" 
       },
       {
         code: 2,
         name: "Ingresso: Meia"
       },
       {
         code: 3,
         name: "Ingresso: VIP"
       }
     ]
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lotes", null, {})
  },
};
