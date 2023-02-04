const bill = document.querySelector("#bill");
const numberPerson = document.querySelector("#number-person");
const buttons = document.querySelectorAll(".container-buttons button");
const customPorcent = document.querySelector("#custom-input");
const inputs = document.querySelectorAll("input");
const tipAmount = document.querySelector(".tip-amount .result");
const total = document.querySelector(".total .result");
const reset = document.querySelector(".reset");
const messageSpan = document.querySelector(".message-error");
let valueButton;

const resetOutput = () => {
  tipAmount.innerText = "$0.00";
  total.innerText = "$0.00";
};

const resetAll = () => {
  tipAmount.innerText = "$0.00";
  total.innerText = "$0.00";
  numberPerson.value = "";
  bill.value = "";
  customPorcent.value = "";
  removeActiveButton();
  valueButton = undefined;
  numberPerson.classList.remove("input-invalid");
  messageSpan.style.display = "none";
};

function removeActiveButton() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
}

function equacao(valueCash, valuePorcent, qtPerson) {
  let bill = Number(valueCash);
  let porcent = Number(valuePorcent);
  let person = Number(qtPerson);
  let result1 = (bill * porcent) / person;
  let result2 = bill / person + result1;
  tipAmount.innerText = `$${result1.toFixed(2)}`;
  total.innerText = `$${result2.toFixed(2)}`;
}

function recebeValores() {
  if (bill.value == "" && numberPerson.value == "") return;
  if (bill.value == "") {
    resetOutput();
    return;
  }
  if (valueButton == undefined) {
    resetOutput();
    return;
  } else if (numberPerson.value === "0" || numberPerson.value == "") {
    numberPerson.classList.add('input-invalid')
    messageSpan.style.display = "block";
    resetOutput();
    return;
  }
  equacao(bill.value, valueButton, numberPerson.value);
}

buttons.forEach((botao) =>
  botao.addEventListener("click", () => {
    removeActiveButton();
    botao.classList.add("active");
    valueButton = botao.value;
    recebeValores();
  })
);

numberPerson.addEventListener("input", () => {
  if(Number(numberPerson.value) <= 0) {
    numberPerson.classList.add("input-invalid");
    messageSpan.style.display = "block";
    return;
    }
    numberPerson.classList.remove("input-invalid");
    messageSpan.style.display = "none";
  recebeValores();
});

bill.addEventListener("input", recebeValores);

reset.addEventListener('click', resetAll)

customPorcent.addEventListener("input", () => {
  try {
    valueButton = eval(`${customPorcent.value} / 100`).toString();
    recebeValores();
  } catch (error) {
    resetOutput();
  }
});

//Bloqueando os caracteres que não serão utilizados para os input
inputs.forEach((input) => {
  input.onkeypress = (e) => {
    let char = String.fromCharCode(e.which);
    if ("0123456789.".indexOf(char) < 0) {
      return false;
    }
  };
});
