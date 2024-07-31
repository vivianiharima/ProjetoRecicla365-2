const cpfRegex = new RegExp(/^\d{11}$/);
const senhaRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,16}$/);


class UsuarioController {
    async cadastrarUsuario(request, response){
        try {

            const dados = request.body

            if(!dados.nome || !dados.email || !dados.senha || !dados.cpf || !dados.sexo || !dados.data_nascimento || !dados.cep){
                return response.status(400).json({mensagem:"Preencha todos os campos obrigatórios."})
            }

            const cepNumeros = dados.cep.replace(/\D/g, '');

            const cpfNumeros = dados.cpf.replace(/\D/g, '');


            if (cpfRegex.test(cpfNumeros)=== false){
                return response.status(400).json({mensagem:"Cpf inválido"})
            }

            const usuarioCadastrado = await Usuario.findOne({
                where: {
                    [Op.or] : [
                        {email: dados.email},
                        {cpf: cpfNumeros}
                    ]
                }
            }) 

            
            if(usuarioCadastrado){
                return response.status(400).json({mensagem:"Usuário já cadastrado"})
            }


            if(senhaRegex.test(dados.senha) === false){
                return response.status(400).json({mensagem:"Senha em formato inválido"})
            }


            const usuario = await Usuario.create({ 
                ...dados,
                cep: cepNumeros,
                cpf: cpfNumeros,
                senha: dados.senha})

            return response.status(201).json({mensagem:"Usuário cadastrado com sucesso!"})


        }catch(error){
            console.log('Erro ao cadastrar:', error)
            return response.status(500).json({mensagem:"Erro ao cadastrar usuário."})
        }
    }
};

module.exports = new UsuarioController()