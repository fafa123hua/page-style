const buttons = document.querySelector('a')
console.log(buttons)

buttons.addEventListener('click', function (e) {
  let x = e.clientX - e.target.offsetLeft
  let y = e.clientY - e.target.offsetTop

  let ripples = document.createElement('span')
  ripples.style.left = x + 'px'
  ripples.style.top = y + 'px'
  this.appendChild(ripples)
  console.log(2)
  setTimeout(() => {
    ripples.remove()
    console.log(1)
  }, 1000)
})
