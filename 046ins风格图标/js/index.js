let list = document.querySelectorAll('.list')
console.log(list)
function setActiveClass() {
  list.forEach((item) => item.classList.remove('active'))
  this.classList.add('active')
}
list.forEach((item) => item.addEventListener('mouseover', setActiveClass))
