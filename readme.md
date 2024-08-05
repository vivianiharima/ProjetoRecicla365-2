# Recilca365

## Sobre a plataforma

**Recicla365** é uma plataforma que fornece um espaço para os usuarios cadastrarem e consultarem *pontos de coleta de resíduo*.
Essa plataforma contribui com a troca de informação sobre os locais de coleta, onde os usuários poderão inserir descrições e consultar os locais e os tipos de resíduos coletados pelo mapa, facilitando o conhecimento dos pontos de coleta e promovendo a *reciclagem consciente*.

## Sobre o projeto

Esse projeto foi desenvolvido em JavaScript com as tecnologias:
- **Node.js** (JavaScript runtime)
- **Express** (Framework para criação de APIs)
- **Sequelize** (ORM para interação com o banco de dados PostgreSQL) 
- **Nominatim** (API que utiliza os dados do OpenStreetMap para converter endereços em coordenadas geográficas e vice-versa)

Além de fazer uso também das bibliotecas:
- **Axios** (Requisições HTTP)
- **Bcriptjs** (Criptografia de senhas)
- **Cors** (Controle de acesso a recursos)
- **Dotev** (Configuração de variáveis de ambiente)
- **Jsonwebtoken** (Gerenciamento de tokens JWT)
- **Pg** e **pg-hstore** (Utilitários para PostgreSQL)
- **Swagger-autogen** e **swagger-ui-express** (Documentação e visualização da API)


## Como funciona

### Configuração inicial:

1. Instale as dependências com o comando: 
npm install
2. Crie seu arquivo .env com o comando: 
cp .env_example .env
3. Edite o arquivo .env, substituindo os dados de exemplo pelas suas variáveis de ambiente.
4. Execute as migrações no banco de dados com o comando: 
npx sequelize-cli db:migrate

### Para rodar o projeto localmente:
- Execute o comando: 
npm run start:dev

## Funcionalidades

### Funcionalidades públicas:
- Cadastro de usuários
- Login de Usuários

### Funcionalidades privadas:
- Cadastro de locais de coleta
- Edição de locais de coleta
- Listagem de todos os locais
- Listagem de um local pelo Id
- Atualização de um local pelo Id
- Exclusão de local pelo Id
- Geração de link do Google Maps para um local pelo Id

### Exemplo de uso:
Para adicionar um ponto de coleta, faça uma requisição **POST** para o endpoint **'/locais'**, da seguinte forma:
- Exemplo de requisição no body:
        '{
           "nome": "Ponto de Coleta 1",
           "descricao": "Coleta de resíduos orgânicos.",
           "cep": "88015-120",
           "rua": "Dom Jaime Câmara",
           "bairro": "Centro",
           "cidade": "Florianópolis",
           "estado": "SC",
           "complemento": "Próximo ao edifício PrimeTower"
         }'

- Exemplo de resposta:
        '{
            "mensagem": "Local de coleta cadastrado com sucesso!"
        }'

### Melhorias para o futuro:
* Buscar alternativas para a biblioteca Nominatim para evitar limitações na quantidade de CEPs consultados e melhorar a geração do link do Google Maps.
* Adicionar mais funcionalidades de gerenciamento de usuários, como edição, exclusão e listagem.
* Integrar com APIs como ViaCEP para facilitar o preenchimento de informações e melhorar a experiência do usuário.
* Adicionar categorias para os tipos de resídio que são coletados em cada local e adicionar a funcionalidade de listar os locais por categoria.

