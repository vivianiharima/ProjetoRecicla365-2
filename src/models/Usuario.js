const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const {hashSync} = require('bcryptjs');


const Usuario = connection.define('usuarios',{
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    sexo:{
        type: DataTypes.STRING
    },
    cep:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rua:{
        type: DataTypes.STRING
    },
    bairro:{
        type: DataTypes.STRING
    },
    cidade:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    complemento:{
        type: DataTypes.STRING
    },

    data_nascimento:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

Usuario.beforeSave((usuario) => {
    usuario.senha = hashSync(usuario.senha, 10)
    return usuario
})


module.exports = Usuario