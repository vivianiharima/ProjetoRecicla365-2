const { Router } = require('express');

const usuariosRoutes = require('./usuarios.routes');
const locaisRoutes = require('./locais.routes');
const loginRoutes = require('./login.routes');

const routes = new Router();

routes.use('/usuarios', usuariosRoutes);
routes.use('/locais', locaisRoutes);
routes.use('/login', loginRoutes)


module.exports = routes