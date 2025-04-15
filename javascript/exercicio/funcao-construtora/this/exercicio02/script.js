const inputModelo = document.querySelector('#modelo')
const inputColor = document.querySelector('#cor')

const button = document.querySelector('#btnAdicionar')

const ul = document.querySelector('#listaCarros')


function Carro(modelo, cor) {
  this.modelo = modelo
  this.cor = cor

  this.getInfoCar = function () {
    return `${this.modelo}, ${this.cor}`
  }

}

const addInfo = () => {
  const modelo = inputModelo.value.trim()
  const cor = inputColor.value.trim()

  if (modelo && cor) {
    const novoCarro = new Carro(modelo, cor)
    const li = document.createElement('li')
    li.textContent = novoCarro.getInfoCar()
    ul.appendChild(li)
    inputModelo.value = ''
    inputColor.value = ''

    inputNome.focus()
  } else {
    alert('Preencha os campos corretamente!')
  }
}

button.addEventListener('click', addInfo)