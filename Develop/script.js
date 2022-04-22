
// Get DOM
const passwordText = document.getElementById('password');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const form = document.getElementById('passGenerate');
// const generateBtn = document.getElementById('generate');

// Create char codes
const chars = {
  
}

// Create password
const createPassword = (count, upper, numbers, symbols) => {
  passwordText.innerText = count;
}

// Write password to the #password input
const writePassword = () => {
  let password = createPassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Checking the options selected and setting password
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const count = lengthDOM.value;
  const upper = uppercaseDOM.checked;
  const numbers = numbersDOM.checked;
  const symbols = symbolsDOM.checked;
  console.log(uppercaseCodes);
  // const password = createPassword(count, upper, numbers, symbols);
  // passwordText.innerText = password;
});


