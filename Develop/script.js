
// Get DOM
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const form = document.getElementById('passGenerate');
const generateBtn = document.getElementById('generate');

// Checking the options that are selected and setting the password
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  console.log(characterAmount);
});

let createPassword = (count, upper, number, symbol) => {

}

// Write password to the #password input
const writePassword = () => {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
