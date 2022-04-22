
// Get DOM
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const form = document.getElementById('passGenerate');
const generateBtn = document.getElementById('generate');

// Checking the options selected and setting password
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const count = lengthDOM.value;
  const upper = uppercaseDOM.value;
  const numbers = numbersDOM.value;
  const symbols = symbolsDOM.value;
  createPassword(count, upper, numbers, symbols);
});

let createPassword = (count, upper, numbers, symbols) => {

}

// Write password to the #password input
const writePassword = () => {
  let password = createPassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;

}
