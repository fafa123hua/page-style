let loader = document.querySelector('.loader')

document.body.addEventListener('click', () => {
  loader.classList.remove('loadding')
  loader.classList.add('check')
})
