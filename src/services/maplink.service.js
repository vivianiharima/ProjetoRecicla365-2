const axios = require('axios');

    async function pegarCoordenadasPeloCep(cep){

        const urlMapaApi = 'https://nominatim.openstreetmap.org/search?format=json&country=Brazil&limit=1'

        try {
            const response = await axios.get(`${urlMapaApi}&postalcode=${cep}`);
            const data = response.data;
             
            if(!data || !data.lenght === 0){
                throw new Error(`Não foi possível encontrar coordenadas para o CEP: ${cep}. Verifique se o CEP está correto ou tente um CEP diferente.`);
            }
            
            const { lat, lon, display_name } = data[0]

            console.log('Dados da API:', data);

            if(!lat || !lon || !display_name){
                throw new Error(`Não foi possível encontrar os dados de localização. Por favor, verifique se os detalhes fornecidos estão corretos`);
            }

            return { latitude: lat,
                     longitude: lon,
                     nome_local: display_name };


        } catch (error) {

            console.error('Erro ao obter coordenadas:', error.message);
            throw new Error(`Erro ao tentar acessar a API de locailização: ${error.message}`);
        }
    };

    async function gerarLinkGoogleMaps(latitude, longitude){
        try {
            
            return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        
        } catch (error) {
                console.error('Erro ao obter link do Google Maps:', error.message);
                throw new Error(`Erro gerar o link do Google Maps: ${error.message}`);
        }
       
    };

    module.exports = { pegarCoordenadasPeloCep, gerarLinkGoogleMaps };