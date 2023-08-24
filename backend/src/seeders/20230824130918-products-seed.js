/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('products', [
      {
        name: 'Coca-Cola',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Pepsi',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Guaraná',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
