const body = document.querySelector('body')
const toggles = document.querySelectorAll('.circle')

toggles.forEach((box, index) => {
  box.addEventListener('click', () => {
    removeActive()
    box.classList.add('active')
    switch (index) {
      case 1:
        body.classList.remove('theme-3')
        body.classList.add('theme-2')
        break;
      case 2:
        body.classList.remove('theme-2')
        body.classList.add('theme-3')
        break;
      default:
        body.classList.remove('theme-2', 'theme-3')
        break;
    }
  })
});


function removeActive() {
  toggles.forEach( toggle => toggle.classList.remove('active'));
}