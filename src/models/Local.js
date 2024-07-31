const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const Usuario = require('./Usuario');

const Local = connection.define('locais',{
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao:{
        type: DataTypes.TEXT,
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
    usuarioId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    }

});

Local.belongsTo(Usuario,{
    foreignKey: 'usuarioId',
    as: 'usuario'
})


module.exports = Local;