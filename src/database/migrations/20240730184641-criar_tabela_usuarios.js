'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha_hash:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf:{
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
      },
      sexo:{
        type: Sequelize.ENUM('Feminino', 'Masculino', 'Outro'),
        allowNull: false
      },
      data_nascimento:{
        type: Sequelize.DATEONLY,
        allowNull: false
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
    await queryInterface.dropTable('usuarios');
  }
};