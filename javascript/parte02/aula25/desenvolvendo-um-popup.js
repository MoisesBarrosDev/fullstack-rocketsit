const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
// const closePopup = document.querySelector('.popup-close')


button.addEventListener('click', () => {
  popup.style.display = 'block'
})



// closePopup.addEventListener('click', () => {
//   popup.style.display = 'none'
// })


popup.addEventListener('click', (event) => {
    // Pegando a primeira classe do elemento clicado
  const classNameOfClickedElement = event.target.classList[0]
    // Classes que devem fechar o popup
  const closeClasses = ['popup-close', 'popup-wrapper','popup-link']
   // Verificando se a classe clicada está na lista de classes que devem fechar o popup
  const shouldClosePopup = closeClasses.some(clasName => 
    clasName === classNameOfClickedElement)
  console.log(event.target.classList)
  if (shouldClosePopup) {
    popup.style.display = 'none'
  }

})