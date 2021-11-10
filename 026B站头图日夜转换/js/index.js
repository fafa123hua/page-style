let startingPoint
const header = document.querySelector('header')

header.addEventListener('mouseenter', (e) => {
  startingPoint = e.clientX
  header.classList.add('moving')
})

header.addEventListener('mouseout', (e) => {
  header.classList.remove('moving')
  header.style.setProperty('--percentage', 0.5)
})

header.addEventListener('mousemove', (e) => {
  let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5
  header.style.setProperty('--percentage', percentage)
})
