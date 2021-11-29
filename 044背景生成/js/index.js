const container = document.querySelector('.container')
const button = document.querySelector('.button')

for (var i = 1; i <= 140; i++) {
  const blocks = document.createElement('div')
  blocks.classList.add('block')
  document.body.appendChild(blocks)
}
function generate() {
  anime({
    targets: '.block',
    translateX: function () {
      return anime.random(-900, 900)
    },
    translateY: function () {
      return anime.random(-900, 900)
    },
    scale: function () {
      return anime.random(1, 5)
    },
  })
}
generate()
setInterval(function () {
  generate()
}, 3000)
button.onclick = function () {
  generate()
}
