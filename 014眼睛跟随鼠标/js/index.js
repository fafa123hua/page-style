document.querySelector('body').addEventListener('mousemove', eyeball)
function eyeball(e) {
  const eye = document.querySelectorAll('.eye')
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2
    let radian = Math.atan2(e.pageX - x, e.pageY - y)
    let rotation = radian * (180 / Math.PI) * -1 + 270
    eye.style.transform = 'rotate(' + rotation + 'deg)'
    console.log('x坐标是' + `${e.pageX - x}`, 'y坐标是' + `${e.pageY - y}`)
    console.log(radian, rotation)
  })
}
