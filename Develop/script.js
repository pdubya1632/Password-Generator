
// Get DOM
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const form = document.getElementById('passGenerate');
// const generateBtn = document.getElementById('generate');

// Checking the options selected and setting password
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const count = lengthDOM.value;
  const upper = uppercaseDOM.checked;
  const numbers = numbersDOM.checked;
  const symbols = symbolsDOM.checked;
  // const password = createPassword(count, upper, numbers, symbols);
  // resultDOM.innerText = password;
});

let createPassword = (count, upper, numbers, symbols) => {

}

// Write password to the #password input
const writePassword = () => {
  let password = createPassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;

}
