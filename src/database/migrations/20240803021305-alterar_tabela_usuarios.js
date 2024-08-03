'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios', 'senha_hash', 'senha');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('usuarios', 'senha', 'senha_hash');
  }
};
