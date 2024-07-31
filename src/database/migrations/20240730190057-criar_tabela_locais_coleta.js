'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locais', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao:{
        type: Sequelize.TEXT,
        allowNull: true
      },
      cep:{
        type: Sequelize.STRING(9),
        allowNull: false
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false
      },
      estado:{
        type: Sequelize.STRING(30),
        allowNull: false
      },
      complemento:{
        type: Sequelize.STRING,
        allowNull: true
      },
      usuarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
          type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('locais');
  }
};