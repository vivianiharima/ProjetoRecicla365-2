const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController')

const usuariosRoutes = new Router();


usuariosRoutes.post('/', UsuarioController.cadastrarUsuario
    /*
    #swagger.tags = ['Usuários'],
    #swagger.description = 'Endpoint para cadastrar usuários',
    #swagger.parameters['Usuario'] = {
        in: 'body',
        description: 'Cadastra usuário',
        required: true,
        schema: { 
            $nome: "Usuario de teste",
            $email: "teste@gmail.com",
            $senha: "teste123",
            $cpf: "11111111111",
            $senha: "teste123",
            $sexo: "Feminino",
            $cep: "11111111",
            $rua: "teste",
            $bairro: "teste",
            $cidade: "teste",
            $estado: "teste",
            $complemento: "teste",
            $data_nascimento: "20/02/2000"

        }
    }
*/
);


module.exports = usuariosRoutes