const canvas = document.getElementById('canvas')
canvas.width = 1000
canvas.height = 670
var ctx = canvas.getContext('2d')
var par = []
var count = 2000
var img = new Image()
img.src =
  'https://raw.githubusercontent.com/fafa123hua/img-folder/master/%E8%BD%AE%E6%92%AD%E5%9B%BE1.jpg'
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vy = Math.random() + 0.5
    this.vx = Math.random() - 0.5
    this.size = Math.random() * 2 + 1
  }
  update() {
    this.y += this.vy
    this.x += this.vx
    if (this.y >= canvas.height) {
      this.y = 0
    }
  }
  draw() {
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}
function init() {
  for (var i = 0; i < count; i++) {
    par.push(new Particle())
  }
}
init()
img.addEventListener('load', function () {
  function animate() {
    ctx.drawImage(img, 0, 0)
    ctx.globalAlpha = 0.05
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    for (var i = 0; i < par.length; i++) {
      par[i].update()
      par[i].draw()
    }
    requestAnimationFrame(animate)
  }
  animate()
})
