// ------------------------------------------------------------
// Arquivo package.json:
// O package.json é o arquivo principal do projeto e descreve o que o projeto é, 
// suas dependências, versões, e scripts que podem ser executados. 
// Ele serve para o gerenciamento das bibliotecas e configurações do seu projeto.

// Exemplo de um package.json
/*
{
  "name": "meu-projeto", // Nome do seu projeto.
  "version": "1.0.0", // A versão do seu projeto.
  "scripts": {
    "serve": "json-server ./server.json --watch --port 3001" // Comando que você pode rodar no terminal com `npm run serve` para iniciar o json-server.
  },
  "dependencies": {
    "json-server": "^1.0.0-beta.3" // Define que a versão do json-server instalada será a 1.0.0-beta.3 ou mais recente.
  }
}
*/

// ------------------------------------------------------------
// Arquivo package-lock.json:
// O package-lock.json é gerado automaticamente quando você instala as dependências do projeto usando o npm.
// Ele contém informações detalhadas sobre as versões exatas de cada pacote, garantindo que seu projeto tenha as mesmas versões de dependências 
// em qualquer máquina, o que ajuda a evitar conflitos e problemas de versões.

// Exemplo de package-lock.json
/*
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "dependencies": {
    "json-server": {
      "version": "1.0.0-beta.3", // Versão exata do json-server instalada.
      "resolved": "https://registry.npmjs.org/json-server/-/json-server-1.0.0-beta.3.tgz", // URL de onde a versão foi baixada.
      "integrity": "sha512-..." // Integridade do arquivo baixado, para garantir que o arquivo não foi corrompido.
    }
  }
}
*/

// ------------------------------------------------------------
// A pasta node_modules:
// A pasta node_modules contém todas as bibliotecas (dependências) que foram instaladas para o projeto.
// Essas bibliotecas são baixadas pelo npm a partir das definições do package.json. 
// Não edite nada diretamente dentro dessa pasta, a menos que seja necessário, porque ela é gerenciada automaticamente pelo npm.

// O node_modules é um diretório onde ficam as dependências do projeto, 
// e cada dependência pode ter suas próprias dependências. Quando o npm instala as dependências, ele as coloca aqui.

// Exemplo de conteúdo do node_modules:
/*
node_modules/
  ├── json-server/         // Biblioteca json-server.
  ├── lodash/              // Outro pacote que o seu projeto pode depender.
  └── express/             // Outra dependência importante do seu projeto.
*/


// COMANDOS IMPORTANTES: 

// 1° PASSO - INSTALAR O NPM (Node Package Manager):
// No terminal, rode o comando para instalar o json-server, que é uma ferramenta que cria um servidor fake para dados em JSON:
// 
// Comando: `npm install json-server`
// Esse comando vai baixar e instalar a dependência 'json-server' no seu projeto.


// 2° PASSO - CRIAR O ARQUIVO server.json:
// Agora, crie um arquivo chamado `server.json` no diretório do seu projeto.
// Esse arquivo conterá os dados no formato JSON que você quer que o servidor simule.
// Exemplo de conteúdo para o `server.json`:
// 
// {
//   "posts": [
//     { "id": 1, "title": "Primeiro Post" },
//     { "id": 2, "title": "Segundo Post" }
//   ]
// }

 
// 3° PASSO - CONFIGURAR O PACKAGE.JSON:
// No arquivo `package.json` do seu projeto, localize o objeto "scripts" e adicione a seguinte linha:
// 
// "scripts": {
//   "serve": "json-server ./server.json --port=3333"
// }
// 
// Essa configuração define um script que pode ser executado com o comando `npm run serve`.
// O comando irá iniciar o servidor fake e fazer ele ler o arquivo `server.json`.
// A flag `--port=3333` indica que o servidor vai rodar na porta 3333.
// **Lembre-se**: Não coloque espaços após o `=` no comando, ou ocorrerá um erro.


// 4° PASSO - DEFINIR OS DADOS QUE SERÃO EXIBIDOS:
// Dentro do arquivo `server.json`, você deve colocar os dados no formato JSON que deseja exibir no seu servidor fake.
// Exemplo:
// 
// {
//   "posts": [
//     { "id": 1, "title": "Primeiro Post" },
//     { "id": 2, "title": "Segundo Post" }
//   ]
// }
// Esses dados estarão disponíveis na URL configurada, como `http://localhost:3333/posts`.


 // 5° PASSO - VERIFICAR O CONTEÚDO DO SERVIDOR:
// Depois de rodar o servidor com o comando `npm run serve`, você pode acessar o conteúdo no seu navegador, 
// acessando o endereço da URL, por exemplo:
// 
// http://localhost:3333/posts
// 
// Isso vai exibir os dados que você configurou no arquivo `server.json`.
// Se você tiver um caminho específico no JSON, pode acessar diretamente:
// Exemplo: `http://localhost:3333/posts/1` para ver o primeiro post.


// Ordem	Arquivo	Função principal
// 1	package-lock.json	Garante versões exatas das dependências
// 2	package.json	Informa nome, versão, dependências e scripts (não define porta diretamente!)
// 3	server.json (ou db.json)	Simula uma API falsa com dados em JSON
// 4	node_modules	Contém os pacotes instalados via npm (não deve ser editado manualmente)