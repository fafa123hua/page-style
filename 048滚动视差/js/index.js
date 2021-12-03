const background = document.querySelector('.background')
console.log(background)
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY

  console.log(scrollY)

  if (scrollY !== 0) {
    background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
  } else {
    background.style.backgroundPosition = ''
  }
})
