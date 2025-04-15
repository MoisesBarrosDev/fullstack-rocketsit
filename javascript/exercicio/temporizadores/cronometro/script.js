const paragraph = document.querySelector('#cronometro')

const buttonInitial = document.querySelector('#iniciar')
const buttonPause = document.querySelector('#pausar')
const buttonReset = document.querySelector('#resetar')

let contador = 0
let intervaloCronometro = null

buttonInitial.addEventListener('click', () => {
  if (intervaloCronometro === null) {
    intervaloCronometro = setInterval(() => {
      contador++;
      paragraph.textContent = contador;

      if (contador === 10) {
        clearInterval(intervaloCronometro);
        paragraph.textContent = `O contador atingiu o seu máximo: ${contador}`;
      }
    }, 500);
  }
});


buttonPause.addEventListener('click', () => {
  /*
  se não coloca isso, no caso ele não volta a funcionar, pois vai ficar pausado,
   mesmo que clique em iniciar, essa limpeza a baixo do  clearInterval, 
   sgnifica meio que limpando essa pausa para que volte a funcionar assim que clicar em iniciar
  */
  clearInterval(intervaloCronometro)
  intervaloCronometro = null
})


buttonReset.addEventListener('click', () => {
  clearInterval(intervaloCronometro)
  intervaloCronometro = null
  contador = 0
  paragraph.textContent = contador
})