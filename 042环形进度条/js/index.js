let dom = document.getElementById('word')
let right = document.getElementById('right')
let left = document.getElementById('left')

console.log(left)
let num = 0
setInterval(function () {
  num++

  if (num > 360) {
    num = 0
    right.style.transform = `rotate(${num}deg)`
    left.style.transform = `rotate(${num}deg)`
  }

  if (num <= 180) {
    right.style.transform = `rotate(${num}deg)`
  } else {
    left.style.transform = `rotate(${num - 180}deg)`
  }

  let ans = num / 3.6
  dom.innerHTML = ans.toFixed(2)
}, 50)
