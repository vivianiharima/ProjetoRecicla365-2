const { Router } = require('express');
const LocalController = require('../controllers/LocalController')

const locaisRoutes = new Router();


locaisRoutes.post('/', LocalController.cadastrarLocal);
locaisRoutes.get('/:id', LocalController.listarLocal);
locaisRoutes.get('/', LocalController.listarTudo);
locaisRoutes.put('/:id', LocalController.atualizarLocal);
locaisRoutes.delete('/:id', LocalController.deletarLocal);
locaisRoutes.get('/:id/maps', LocalController.gerarLinkMapa);



module.exports = locaisRoutes
