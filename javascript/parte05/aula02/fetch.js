// Utilizando o fetch: o fetch é uma função nativa do JavaScript
// que serve para fazer requisições HTTP (como GET, POST, PUT, DELETE, etc).

// Aqui estamos chamando a função fetch()
// passando como argumento a URL da API que queremos acessar.
fetch('http://localhost:3333/products')

  // Depois que o servidor (API) responde, chamamos o método .then()
  // A resposta inicial que o servidor devolve é um objeto de resposta (Response),
  // mas os dados ainda não estão prontos para uso — eles precisam ser convertidos para JSON.
  .then((response) => 
    response.json() // Transformamos a resposta bruta em um objeto JavaScript usando .json().
  )

  // Depois que a conversão para JSON termina, chamamos outro .then().
  // Agora temos acesso aos dados já convertidos, prontos para usar.
  .then((data) => 
    console.log(data) // Aqui simplesmente mostramos os dados no console.
  );

// Resumo da sequência:
// 1. Front-end envia uma requisição HTTP GET para 'http://localhost:3333/products'.
// 2. O Back-end (API) recebe essa requisição, consulta o banco de dados se necessário e gera uma resposta.
// 3. O fetch recebe a resposta bruta.
// 4. O response.json() transforma essa resposta bruta em um objeto JavaScript.
// 5. O console.log(data) imprime os dados no console para o desenvolvedor ver.
