const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc.swagger.json');
const usuariosRoutes = require('./usuarios.routes');
const locaisRoutes = require('./locais.routes');
const loginRoutes = require('./login.routes');
const verificaToken = require('../middlewares/verificaToken');


const routes = new Router();



routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/usuarios', usuariosRoutes
    /*
    #swagger.tags = ['Usuários'],
    #swagger.description = 'Endpoint para cadastrar usuários',
    #swagger.parameters['Usuario'] = {
        in: 'body',
        description: 'Cadastro de usuário',
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

routes.use('/login', loginRoutes
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

routes.use('/locais',verificaToken, locaisRoutes
    /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para cadastrar, listar e manipular locais',
        #swagger.parameters['locaisColeta'] = {
            in: 'body',
            description: 'Locais de coleta',
            required: true,
            schema{
                $nome: "local de teste",
                $descricao: "teste",
                $cep: "11111111",
                $rua: "teste",
                $bairro: "teste",
                $cidade: "teste",
                $estado: "teste",
                $complemento: "teste",
            }
        }
    */
);


module.exports = routes