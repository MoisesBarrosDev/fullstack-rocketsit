const ul = document.querySelector('ul')
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li')
  li.textContent = 'Novo Item'
  ul.appendChild(li)
});



ul.addEventListener('click',(event)=>{
  const clickedElement = event.target

  if(clickedElement.tagName === 'LI'){
    clickedElement.remove()
  }
})