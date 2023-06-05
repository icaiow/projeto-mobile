# projeto-mobile
# Product List - React Native

Este é um aplicativo React Native que implementa uma lista de produtos de uma padaria, permitindo adicionar, editar e remover produtos, além de calcular o preço total.

## Funcionalidades

- Exibir uma lista de produtos com nome e preço.
- Adicionar um novo produto à lista.
- Editar um produto existente.
- Remover um produto da lista.
- Calcular o preço total dos produtos.

## Pré-requisitos

- Node.js (https://nodejs.org)
- Expo CLI (https://expo.io/tools#cli)
- MySQL (https://www.mysql.com)

## Configuração

1. Clone o repositório:
https://github.com/icaiow/projeto-mobile.git


2. Navegue até o diretório do projeto:


3. Instale as dependências:


4. Configuração do banco de dados:
   
   - Certifique-se de ter um servidor MySQL em execução.
   - Crie um banco de dados chamado `product_list`.
   - Edite o arquivo `database.js` e atualize as configurações de conexão do banco de dados, como host, usuário, senha, etc.

5. Inicie o aplicativo:


6. Use um dispositivo físico, emulador ou o aplicativo Expo Go para executar o aplicativo em um dispositivo móvel.

## Dependências principais

- React
- React Native
- MySQL2

## Estrutura do projeto

- `App.js`: Ponto de entrada do aplicativo React Native.
- `ProductList.js`: Componente principal que exibe a lista de produtos e lida com as operações CRUD.
- `ProductItem.js`: Componente que exibe um item individual da lista de produtos.
- `database.js`: Arquivo de configuração e conexão com o banco de dados MySQL.

## Contribuição

Contribuições são bem-vindas! Se você encontrar um bug ou tiver alguma melhoria, sinta-se à vontade para abrir uma issue ou enviar uma solicitação pull.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
