const paragraph = document.querySelector('#contador')

let contador = 0

const timeOut = setInterval(() => {
  contador++
  paragraph.textContent = contador

  if (contador === 10) {
    clearInterval(timeOut)
    paragraph.textContent =`Contador atingiu o seu maximo! ${contador}`
  }
}, 1000)