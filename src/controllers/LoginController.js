const Usuario = require("../models/Usuario");
const { compareSync } = require("bcryptjs");
const { sign } = require('jsonwebtoken');

class LoginController {
    async logar(request, response){
        try {
            const dados = request.body
            if (!dados.email || !dados.senha) {
                return response.status(400).json({
                    mensagem: "Email e senha são obrigatórios."})
            }

            const usuario = await Usuario.findOne({
                where: { email: dados.email }
            });

            if(!usuario){
                return response.status(404).json({
                    mensagem: "Usuário não encontrado!"})
            }

            const senhaCerta = compareSync(dados.senha, usuario.senha)
            
            if(!senhaCerta){
                return response.status(404).json({
                    mensagem: 'Usuário não encontrado'})
            }

            const token = sign({id: usuario.id}, process.env.JWT_SECRET, {expiresIn: '1d'})
            
            return response.status(200).json({
                usuario: usuario.nome, token: token})

                
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Erro ao realizar login' })
        }
    }
};

module.exports = new LoginController()