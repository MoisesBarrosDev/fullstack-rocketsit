// 1. Função Construtora
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.getInfo = function() {
    return `${this.nome}, ${this.idade} anos`;
  };
}

// 2. Pega os elementos do HTML
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const btnCadastrar = document.getElementById('btnCadastrar');
const lista = document.getElementById('listaPessoas');

// 3. Evento de clique no botão
btnCadastrar.addEventListener('click', function() {
  const nome = inputNome.value.trim();
  const idade = parseInt(inputIdade.value);

  // Validação simples
  if (nome && !isNaN(idade)) {
    // 4. Cria o novo objeto com new
    const novaPessoa = new Pessoa(nome, idade);

    // 5. Cria um <li> com as informações
    const li = document.createElement('li');
    li.textContent = novaPessoa.getInfo();
    lista.appendChild(li);

    // Limpa os campos
    inputNome.value = '';
    inputIdade.value = '';
    inputNome.focus();
  } else {
    alert('Preencha os campos corretamente!');
  }
});
