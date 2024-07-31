const Local = require("../models/Local");

class LocalController {
    async cadastrarLocal(request, response){
        try {
            const dados = request.body
            if (!dados.nome || !dados.descricao || !dados.cep || !dados.rua || !dados.cidade || !dados.estado) {
                return response.status(400).json({ mensagem: "Todos os campos obrigatórios devem ser preenchidos." });
            }
            const cepNumeros = dados.cep.replace(/\D/g, '');
           await Local.create({
                nome,
                descricao,
                cep: cepNumeros,
                rua,
                cidade,
                estado,
                complemento
            });
            return response.status(201).json({mensagem:"Local de coleta cadastrado com sucesso!"})
        }catch(error){
            console.log('Erro ao cadastrar local:', error)
            return response.status(500).json({mensagem:"Erro ao cadastrar novo local."})
        }
    }

    async listarLocal(request, response){
        try {
            const id = request.params.id
            const local = await Local.findByPk(id)
            if(!local){
                return response.status(404).json({mensagem: "Local não encontrado"})
            }

            return response.json(local)
        } catch (error) {
              return response.status(500).json({mensagem: 'Erro ao listar local'})
        }
    }

    async listarTudo(request, response){
        try {
            const locais = await Local.findAll()
            if(!locais){
                return response.status(404).json({mensagem:"Nenhum local foi encontrado"})
            }
            return response.json({locais})
        } catch (error) {
            return response.status(500).json({mensagem: 'Erro ao listar local'})
        }
    }

    async atualizarLocal(request, response){
        try {
            const id = request.params.id
            const dados = request.body
            const local = await Local.findByPk(id)

            if(!local){
                return response.status(404).json({mensagem: "Local não encontrado"})
            }
            const cepNumeros = dados.cep.replace(/\D/g, '');


            await Local.update(
                {   nome: dados.nome,
                    descricao: dados.descricao, 
                    cep: cepNumeros,         
                    rua: dados.rua,          
                    cidade: dados.cidade,
                    estado: dados.estado,
                    complemento: dados.complemento
                },
                { where: { id } } 
            );

            const localAtualizado = await Local.findByPk(id);
           
            return response.status(201).json({localAtualizado})

        } catch (error) {
            return response.status(500).json({mensagem: 'Erro ao atualizar o local'})
        }
    }
};

module.exports = new LocalController()