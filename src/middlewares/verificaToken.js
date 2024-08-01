const {verify} = require('jsonwebtoken');

function verificaToken(request, response, next){
    try {
        
        const token = request.headers.authorization

        if(!token){
            return response.status(401).json({mensagem:'Token não fornecido'})
        }
        const jwt = token.split('')[1];

        if(!jwt){
            return response.status(401).json({mensagem:'Token não fornecido'})
        }

        const verificado = verify(jwt, process.env.JWT_SECRET)

        request.usuarioId = verificado.id

        next()

    } catch (error) {
        console.log(error)
        if(error.message === "jwt malformed"){
            return response.status(401).json({ mensagem: 'O Token está inválido' })
        }
        if(error.message === "jwt expired"){
            return response.status(401).json({ mensagem: 'O Token está expirado' })
        }

        return response.status(500).json({ mensagem: 'Erro ao validar token' })
    }


}
module.exports = verificaToken;