const { Router } = require('express');
const LoginController = require('../controllers/LoginController')

const loginRoutes = new Router();


loginRoutes.post('/', LoginController.logar
     /*
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Para logar um usuário',
        #swagger.parameters['loginUsuario'] = {
            in: 'body',
            description: 'Login de usuário',
            required: true,
            schema: { 
                $email: "teste@gmail.com",
                $senha: "teste123"
            }
        }
    */
);


module.exports = loginRoutes