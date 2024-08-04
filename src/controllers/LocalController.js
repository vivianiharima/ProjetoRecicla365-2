const Local = require("../models/Local");
const { pegarCoordenadasPeloCep, gerarLinkGoogleMaps } = require("../services/maplink.service");

class LocalController {
    async cadastrarLocal(request, response){
        try {
            const dados = request.body;
            const usuarioId = request.usuarioId;

            if (!dados.nome || !dados.descricao || !dados.cep || !dados.rua || !dados.cidade || !dados.estado) {
                return response.status(400).json({ mensagem: "Todos os campos obrigatórios devem ser preenchidos." });
            }
            const cepNumeros = dados.cep.replace(/\D/g, '');
            
           await Local.create({
                nome: dados.nome,
                descricao: dados.descricao, 
                cep: cepNumeros,         
                rua: dados.rua,
                bairro: dados.bairro,
                cidade: dados.cidade,
                estado: dados.estado,
                complemento: dados.complemento,
                usuarioId
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
            console.log(error)
            return response.status(500).json({mensagem: 'Erro ao listar local'})
        }
    }

    async listarTudo(request, response){
        try {
            const locais = await Local.findAll()
            if(locais.length === 0){
                return response.status(404).json({mensagem:"Nenhum local foi encontrado"})
            }
            return response.json({locais})
        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: 'Erro ao listar local'})
        }
    }

    async atualizarLocal(request, response){
        try {
            const localId = request.params.id;
            const userId = request.usuarioId; //userId para não confundir com o usuarioId
            const dados = request.body;

            const local = await Local.findOne({
                where: {
                    id: localId,
                    usuarioId: userId
                }
            });
         
            

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

            return response.status(200).json({ mensagem: "Local atualizado com sucesso:", local});

        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: 'Erro ao atualizar o local'})
        }
    }

    async deletarLocal(request, response){
        try {
            const localId = request.params.id;
            const userId = request.usuarioId; 
    
            const local = await Local.findOne({
                where: {
                    id: localId,
                    usuarioId: userId
                }
            });

            if(!local){
                return response.status(404).json({mensagem: "Local não encontrado"})
            }
            await local.destroy()
            return response.status(200).json({mensagem:'Local excluído com sucesso'})

        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: 'Erro ao excluir local'})
        }
    }

    async gerarLinkMapa(request, response){
        try {

            const localId = request.params.id;
            const userId = request.usuarioId;

            const local = await Local.findOne({
                where: {
                    id: localId,
                    usuarioId: userId
                }
            });
    
            if(!local){
                return response.status(404).json({mensagem: "Local não encontrado"})
            }

            const coordenadas = await pegarCoordenadasPeloCep(local.cep);

            if (!coordenadas || !coordenadas.latitude || !coordenadas.longitude) {
                return response.status(404).json({ mensagem: "Coordenadas não encontradas para o CEP fornecido" });
            }
            const linkMapa = await gerarLinkGoogleMaps(coordenadas.latitude, coordenadas.longitude);
                return response.status(200).json({linkMapa});
    

        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: 'Erro ao gerar link do Google Maps'})
        }
    }
};

module.exports = new LocalController()