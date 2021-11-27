const toggle = document.getElementsByClassName('toggle')
var timeOutId = null
let bool = 1
boxMove(toggle[0])
function boxMove(node) {
  node.onmousedown = function (ev) {
    e = ev || window.event
    let x = e.pageX - this.offsetLeft
    let y = e.pageY - this.offsetTop
    var move = (document.onmousemove = (ev) => {
      e = ev || window.event
      this.style.left = e.pageX - x + 'px'
      this.style.top = e.pageY - y + 'px'
      document.onmousemove = null
      timeOutId = setTimeout(function () {
        document.onmousemove = move
      }, 90)
      document.onmouseup = () => {
        clearTimeout(timeOutId)
        document.onmousemove = null
      }
    })
    if (bool) {
      toggle[0].onclick = function () {
        toggle[0].classList.toggle('active')
      }
    }
    bool = 1
  }
}
