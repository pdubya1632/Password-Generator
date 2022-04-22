
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
  function lowerCase() { return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)] },
  function upperCase() { return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)] },
  function numbers() { return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)] },
  function symbols() { return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)] }
]

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

  while (password.length < count) {
    password += randomChars[Math.floor(Math.random() * randomChars.length)];
  }

  // add final password to text field on page
  passwordText.innerHTML = password;
}

// Call createPassword function after submitting form
form.addEventListener('submit', createPassword);


