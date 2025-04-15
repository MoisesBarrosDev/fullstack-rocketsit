const botaoTimeout = document.getElementById('botaoTimeout');
const mensagemTimeout = document.getElementById('mensagemTimeout');

const loading = () => {
  mensagemTimeout.textContent = 'Aguardando...'

  setTimeout(() => {
    mensagemTimeout.textContent = 'Passaram 3 segundos!'
  }, 3000)
}

botaoTimeout.addEventListener('click', loading)


const contadorElement = document.querySelector('#contador')

let contador = 0

const intervalo = setInterval(() => {
  contador++;
  contadorElement.textContent = contador;
  if (contador === 10) {
    clearInterval(intervalo);
  }
}, 1000);

// Missão Extra: Cronômetro
const cronometroElemento = document.getElementById('cronometro');
const btnIniciar = document.getElementById('iniciar');
const btnPausar = document.getElementById('pausar');
const btnResetar = document.getElementById('resetar');

let tempo = 0;
let intervaloCronometro = null;


btnIniciar.addEventListener('click', () => {
  if (intervaloCronometro === null) {
    intervaloCronometro = setInterval(() => {
      tempo++;
      cronometroElemento.textContent = tempo;
    }, 1000);
  }
});

btnPausar.addEventListener('click', () => {
  clearInterval(intervaloCronometro);
  intervaloCronometro = null;
});

btnResetar.addEventListener('click', () => {
  clearInterval(intervaloCronometro);
  intervaloCronometro = null;
  tempo = 0;
  cronometroElemento.textContent = tempo;
});