let img = document.querySelector('.img')
let deg = 0
let imgx = 0
let imgy = 0
let imgl = 0
let imgt = 0
let y = 0
let index = 0
window.addEventListener('mousemove', function (e) {
  imgx = e.x - img.offsetLeft - img.clientWidth / 2
  imgy = e.y - img.offsetTop - img.clientHeight / 2
  deg = (360 * Math.atan(imgy / imgx)) / (2 * Math.PI)
  index = 0
  if (img.offsetLeft < e.clientX) {
    y = -180
  } else {
    y = 0
  }
})
setInterval(() => {
  img.style.transform = 'rotateZ(' + deg + 'deg) rotateY(' + y + 'deg)'
  index++
  if (index < 200) {
    imgl += imgx / 200
    imgt += imgy / 200
  }
  img.style.left = imgl + 'px'
  img.style.top = imgt + 'px'
}, 10)
