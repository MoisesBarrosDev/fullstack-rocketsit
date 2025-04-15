const button = document.querySelector('#iniciarCarregamento')
const paragraph = document.querySelector('#statusCarregamento')


let contador = 0
let vazio = null

const carregamento = () => {
  if (vazio === null) {
    vazio = setInterval(() => {
      contador++
      paragraph.textContent = `Carregando... ${contador}%`

      if (contador === 100) {
        clearInterval(vazio)
        paragraph.textContent = 'Carregamento completo! ✅'
        vazio = null // permite reiniciar se quiser
        contador = 0 // reseta o contador para nova execução
      }
    }, 100) // 100ms entre atualizações
  }
}

button.addEventListener('click', carregamento)
