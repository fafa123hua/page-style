var hours = document.getElementsByClassName('a')
var minutes = document.getElementsByClassName('b')
var seconds = document.getElementsByClassName('c')
function clock() {
  var h = new Date().getHours()
  var m = new Date().getMinutes()
  var s = new Date().getSeconds()
  hours[0].innerHTML = h < 10 ? '0' + h : h
  minutes[0].innerHTML = m < 10 ? '0' + m : m
  seconds[0].innerHTML = s < 10 ? '0' + s : s
  console.log(hours, minutes, seconds)
}
setInterval(clock, 1000)
