const list = document.querySelector('.list')
const box = document.querySelector('.box')

list.innerHTML += list.innerHTML
let left = 0
let timer
function move() {
  clearInterval(timer)
  timer = setInterval(function () {
    left -= 1
    if (left === -(4 * 400 + 4 * 20)) {
      left = 0
    }
    list.style.left = left + 'px'
  }, 10)
}
move()
box.onmouseenter = function () {
  clearInterval(timer)
}
box.onmouseleave = function () {
  move()
}
