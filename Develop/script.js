
// Get elements on page
const passwordText = document.getElementById('passwordText');
const form = document.getElementById('passwordOptions');

// Create object with all possible characters
const chars = {
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~\\`|}{[]:;?><,./-='
}

// Array of functions for each character type
const randomChars = [
  function upperCase() { return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)]; },
  function lowerCase() { return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)]; },
  function numbers() { return keys.numbers[Math.floor(Math.random() * keys.numbers.length)]; },
  function symbols() { return keys.symbols[Math.floor(Math.random() * keys.symbols.length)]; }
];

// Create password
const createPassword = (event) => {

  // prevent page from refreshing
  event.preventDefault();

  // create variables from form selections
  const count = document.getElementById('count').value;
  const upper = document.getElementById('uppercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;

  // create empty password variable that can be updated
  let password = '';

  // add new characters to password until count is hit
  while (password.length < count) {
    let newChar = randomChars[Math.floor(Math.random() * randomChars.length)]
    password += newChar;
  }

  // add final password to text field on page
  passwordText.innerHTML = password;
}

// Call createPassword function after submitting form
form.addEventListener('submit', createPassword);


