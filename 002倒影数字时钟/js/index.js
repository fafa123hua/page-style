function clock() {
  var hours = document.getElementsByClassName('hour')
  var minutes = document.getElementsByClassName('minutes')
  var seconds = document.getElementsByClassName('seconds')
  var h = new Date().getHours()
  var m = new Date().getMinutes()
  var s = new Date().getSeconds()
  hours.innerHTML = h
  minutes.innerHTML = m
  seconds.innerHTML = s
  console.log(hours, minutes, seconds)
}
setInterval(clock, 1000)
