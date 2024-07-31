const { Router } = require('express');
const LocalController = require('../controllers/LocalController')

const locaisRoutes = new Router();


locaisRoutes.post('/', LocalController.cadastrarLocal);
locaisRoutes.get('/', LocalController.listarLocal);
locaisRoutes.get('/', LocalController.listarTudo);
locaisRoutes.put('/', LocalController.atualizarLocal);



module.exports = locaisRoutes
