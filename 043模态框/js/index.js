const toggle = document.getElementsByClassName('toggle')
var timeOutId = null
var bool = 1
toggle[0].onmousedown = function (ev) {
  e = ev || window.event
  let x = e.pageX - this.offsetLeft
  let y = e.pageY - this.offsetTop
  bool = e.pageX
  var move = (document.onmousemove = (ev) => {
    e = ev || window.event
    this.style.left = e.pageX - x + 'px'
    this.style.top = e.pageY - y + 'px'
    if (bool - e.pageX != 0) {
      bool = 0
    }
    document.onmousemove = null
    timeOutId = setTimeout(function () {
      document.onmousemove = move
    }, 90)
    document.onmouseup = () => {
      clearTimeout(timeOutId)
      document.onmousemove = null
      if (bool) {
        toggle[0].classList.toggle('active')
      }
    }
  })
}
