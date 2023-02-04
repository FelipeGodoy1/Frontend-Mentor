import "../CSS/style.css";
import IMask from "imask";
const form = document.querySelector("form");

/*
 * ---------------Apply mask on inputs--------------------
*/

//name card mask
const cardNameInput = document.querySelector("#cardholder-name-input");
const maskNameString = {
  mask: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
};
const maskInputName = IMask(cardNameInput, maskNameString);

//number card mask
const numberCardInput = document.querySelector("#card-number-input");
const maskOptionNumber = {
  mask: "0000 0000 0000 0000",
};
const maskInputCard = IMask(numberCardInput, maskOptionNumber);

//MM card mask
const monthCardInput = document.querySelector("#month-input");
const maskMonthNumber = {
  mask: "MM",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
};
const maskInputMonth = IMask(monthCardInput, maskMonthNumber);

//YY card mask
const yearCardInput = document.querySelector("#year-input");
const maskYearNumber = {
  mask: "YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
};
const maskInputYear = IMask(yearCardInput, maskYearNumber);

//CVC card number
const cvcCardInput = document.querySelector("#cvc-input");
const maskCvcNumber = {
  mask: "000",
};
const maskInputCvc = IMask(cvcCardInput, maskCvcNumber);


/*
 * ------------Showing inforamtion on screen---------------------
*/

cardNameInput.addEventListener("input", showNameCard);
function showNameCard() {
  const cardNameDisplay = document.querySelector("#card-name-output");
  cardNameDisplay.innerText = maskInputName.value;
  if (maskInputName.value == "") {
    cardNameDisplay.innerText = "JANE APPLESEED";
  }
}

numberCardInput.addEventListener("input", showNumberCard);
function showNumberCard() {
  const numberCardDisplay = document.querySelector("#card-number-output");
  numberCardDisplay.innerText = maskInputCard.value;
  if (maskInputCard.value == "") {
    numberCardDisplay.innerText = "0000 0000 0000 0000";
  }
}

monthCardInput.addEventListener("input", showMonthCard);
function showMonthCard() {
  const cardMonthDisplay = document.querySelector("#card-month-output");
  cardMonthDisplay.innerText = maskInputMonth.value;
  if (maskInputMonth.value == "") {
    cardMonthDisplay.innerText = "00";
  }
}

yearCardInput.addEventListener("input", showYearCard);
function showYearCard() {
  const cardYearDisplay = document.querySelector("#card-year-output");
  cardYearDisplay.innerText = maskInputYear.value;
  if (maskInputYear.value == "") {
    cardYearDisplay.innerText = "00";
  }
}

cvcCardInput.addEventListener("input", showCvcCard);
function showCvcCard() {
  const cardCvcDisplay = document.querySelector("#cvc-number-output");
  cardCvcDisplay.innerText = maskInputCvc.value;
  if (maskInputCvc.value == "") {
    cardCvcDisplay.innerText = "000";
  }
}


/*
 *----------validate form and input fields--------------------
*/

const regex = {
  name: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/gm,
  numberCard: /^\d{4} \d{4} \d{4} \d{4}$/,
  date: /^\d{2}/,
  cvc: /^\d{3}$/,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const completeState = document.querySelector(".complete-state");

  if (
    regex.name.test(maskInputName.value) &&
    regex.numberCard.test(maskInputCard.value) &&
    regex.date.test(maskInputMonth.value) &&
    regex.date.test(maskInputYear.value) &&
    regex.cvc.test(maskInputCvc.value)
  ) {
    form.classList.add("hide");
    completeState.classList.remove("hide");
  } else {
    checkName();
    checkNumberCard();
    checkMonthYear();
    checkCvc();
  }
}

const addInputError = (input, span) => {
  input.classList.add("invalid-input");
  span.classList.remove("hide");
};

const removeInputError = (input, span) => {
  input.classList.remove("invalid-input");
  span.classList.add("hide");
};

function checkName() {
  const messagErrName = document.querySelector("#label-name .message-error");

  if (maskInputName.value == "") {
    addInputError(cardNameInput, messagErrName);
    return;
  }
  removeInputError(cardNameInput, messagErrName);
}

function checkNumberCard() {
  const messagErrCard = document.querySelector("#label-number .message-error");

  if (!regex.numberCard.test(maskInputCard.value)) {
    addInputError(numberCardInput, messagErrCard);
    return;
  }
  removeInputError(numberCardInput, messagErrCard);
}

function checkMonthYear() {
  const messagErrMMYY = document.querySelector("#month-year .message-error");
  const verifyMonth = regex.date.test(maskInputMonth.value);
  const verifyYear = regex.date.test(maskInputYear.value);

  if (!verifyMonth && !verifyYear) {
    addInputError(monthCardInput, messagErrMMYY);
    addInputError(yearCardInput, messagErrMMYY);
    return;
  }
  if (verifyMonth && !verifyYear) {
    removeInputError(monthCardInput, messagErrMMYY);
    addInputError(yearCardInput, messagErrMMYY);
    return;
  }
  if (verifyYear && !verifyMonth) {
    removeInputError(yearCardInput, messagErrMMYY);
    addInputError(monthCardInput, messagErrMMYY);
    return;
  }
  removeInputError(monthCardInput, messagErrMMYY);
  removeInputError(yearCardInput, messagErrMMYY);
}

function checkCvc() {
  const messageErrCvc = document.querySelector("#cvc-card .message-error");

  if (!regex.cvc.test(maskInputCvc.value)) {
    addInputError(cvcCardInput, messageErrCvc);
    return;
  }
  removeInputError(cvcCardInput, messageErrCvc);
}


const buttonContinue = document.querySelector(".complete-state button");
buttonContinue.addEventListener("click", () => location.reload());