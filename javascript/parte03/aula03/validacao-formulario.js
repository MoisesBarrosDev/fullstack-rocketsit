const form = document.querySelector('.signup-form')
const paragraph = document.querySelector('.feedback')

form.addEventListener('submit', event => {
  event.preventDefault()

  const regex = /^[a-zA-Z]{6,12}$/
  const username = event.target.username.value
  const isAValidUsername = regex.test(username)

  if (isAValidUsername) {
    paragraph.textContent = 'username válido =)'
    return
  }
  paragraph.textContent = ' o username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
})