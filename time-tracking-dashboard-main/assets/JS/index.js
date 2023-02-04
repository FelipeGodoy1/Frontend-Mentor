const currentHours = document.querySelectorAll('.current') //hours
const previousHours = document.querySelectorAll('.previous') //previous
const frequencyDate = document.querySelectorAll('.frequency-result') //links
const anima = document.querySelectorAll('.anima') //class control animation

async function getValueusDash (caseValue) {
  try {
    const response = await fetch('./data.json').then( r => r.json());
    switch (caseValue) {
      case 0:
        response.forEach((element, index) => {
          currentHours[index].innerText = `${element.timeframes.daily.current}hrs`
          previousHours[index].innerText = `Last Day - ${element.timeframes.daily.previous}hrs`
        });
        break;

      case 1:
        response.forEach((element, index) => {
          currentHours[index].innerText = `${element.timeframes.weekly.current}hrs`
          previousHours[index].innerText = `Last Week - ${element.timeframes.weekly.previous}hrs`
        });
        break;

      case 2:
        response.forEach((element, index) => {
          currentHours[index].innerText = `${element.timeframes.monthly.current}hrs`
          previousHours[index].innerText = `Last Month - ${element.timeframes.monthly.previous}hrs`
        });
        break;

      default:
        break;
    }
  } catch (error) {
    console.log('⚠' + error)
  }
}
getValueusDash(1)

function removeActive() {
  for (let i = 0; i < frequencyDate.length; i++) {
    frequencyDate[i].classList.remove('active')
  }
}

frequencyDate.forEach((element, index) => {
  element.addEventListener('click', () => {
    getValueusDash(index)
    removeActive()
    element.classList.add('active')
  })
})

function animate() {
  anima.forEach((box, index) => {
    setTimeout(()=>{
      box.style.opacity = 1
    }, 300 * index)
  });
}
window.addEventListener('load', animate)



