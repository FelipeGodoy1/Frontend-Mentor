const dot = document.querySelector('#dot');
const del = document.querySelector('#delete')
const reset = document.querySelector('#reset')
const equal = document.querySelector('#equal')
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.botao')
const operators = document.querySelectorAll('.operator')
let getTypedValues = []
let formatValue = ''

function equation () {
  if (formatValue == '') return
  try {
    let result = eval(formatValue)
    display.innerText = +result.toFixed(4);
    getTypedValues = []
    formatValue = ''
    getTypedValues.push(result.toString())
  } catch (error) {
    alert('Inalid format')
    throw new Error("Invalid input. Make sure to pass valid numbers");
  }
}

const resetAll = () => {
  getTypedValues = []
  formatValue = ''
  display.innerText = '0'
}

function deleteValue () {
  const deleteLastNumber = getTypedValues.pop()
  formatValue = getTypedValues.toString().replace(/(,)([0-9\.\+\-\*\/\ ]+)/gi,'$2')
  display.innerText = formatValue
  if (getTypedValues.length == 0) {
    display.innerText = '0'
    return;
  }
}

function displayOnScreen () {
  getTypedValues.push(this.value)   
  formatValue = getTypedValues.toString().replace(/(,)([0-9\.\+\-\*\/\ ]+)/gi,'$2')
  display.innerText = formatValue
}

buttons.forEach(button => button.addEventListener("click", displayOnScreen))
equal.addEventListener('click', equation)
del.addEventListener('click', deleteValue)
reset.addEventListener('click', resetAll)






