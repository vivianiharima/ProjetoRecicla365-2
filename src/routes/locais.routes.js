const { Router } = require('express');
const LocalController = require('../controllers/LocalController')

const locaisRoutes = new Router();


locaisRoutes.post('/', LocalController.cadastrarLocal
    /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para cadastrar novo local',
        #swagger.parameters['cadastrarLocal'] = {
            in: 'body',
            description: 'Dados do local',
            required: true,
            schema: { 
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
locaisRoutes.get('/:id', LocalController.listarLocal
        /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para listar um local pelo Id',
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do local',
            required: true,
            schema: {
                type: 'integer',
                example: 1
            }
        }
    */
);
locaisRoutes.get('/', LocalController.listarTudo
        /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Listar todos os locais',
        #swagger.parameters['listarTudo'] = {
            in: 'body',
            description: 'Todos os locais',
            schema: {
                $id: 1
                $nome: "local de teste",
                $descricao: "teste",
                $cep: "11111111",
                $rua: "teste",
                $bairro: "teste",
                $cidade: "teste",
                $estado: "teste",
                $complemento: "teste",
        
        }
    */
);
locaisRoutes.put('/:id', LocalController.atualizarLocal
        /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para atualizar local já existente',
        #swagger.parameters['atualizaLocal'] = {
            in: 'body',
            description: 'Atualiza local',
            required: true,
            schema: { 
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
locaisRoutes.delete('/:id', LocalController.deletarLocal
        /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para deletar local',
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do local a ser deletado',
            required: true,
            schema: {
                type: 'integer',
                example: 1
            }
        }
    */
);
locaisRoutes.get('/:id/maps', LocalController.gerarLinkMapa
        /*
        #swagger.tags = ['Locais'],
        #swagger.description = 'Endpoint para gerar link Google Maps do local',
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do local para gerar link do Google Maps',
            required: true,
            schema: {
                type: 'integer',
                example: 1
            }
        }
    */
);



module.exports = locaisRoutes
