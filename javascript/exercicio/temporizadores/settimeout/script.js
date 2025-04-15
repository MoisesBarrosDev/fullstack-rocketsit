const button = document.querySelector('#botaoTimeout')
const paragraph = document.querySelector('#mensagemTimeout')

const loading = () => {
  paragraph.textContent = 'Aguardando...'

  setTimeout(() => {
  paragraph.textContent = 'Se passaram 3 segundos!'
  },3000)
}


button.addEventListener('click',loading)