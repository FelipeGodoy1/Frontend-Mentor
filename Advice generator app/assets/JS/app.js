
const button = document.querySelector('button')
const h3 = document.querySelector('#advice-id')
const p = document.querySelector('#advice-content')
const url = 'https://api.adviceslip.com/advice'


async function fetchAdvice () {

  h3.innerHTML = "ADVICE #..."
  p.innerHTML = "Wait a second..."

  try {
    const adviceFetch = await fetch(url).then(r => r.json())
  
    setTimeout(()=> {
      const adviceObj = adviceFetch.slip
      const { advice, id } = adviceObj
  
      p.innerHTML = advice
      h3.innerHTML = `ADVICE #${id}`
  
    }, 1000)
  
  } catch (error) {
    p.innerHTML = '⚠️ An unknown error has occurred' 
  }
}

button.addEventListener('click', () => fetchAdvice())






