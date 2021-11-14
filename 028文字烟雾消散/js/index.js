const text = document.querySelector('.text')
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')

const letters = document.querySelectorAll('span')
for (let i of letters) {
  i.addEventListener('mouseover', function () {
    i.classList.add('active')
  })
}
