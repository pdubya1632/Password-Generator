
// Get elements on page
const passwordText = document.getElementById('passwordText');
const form = document.getElementById('passwordOptions');

// Array of functions for each character type
const randomChars = [
  function upperCase() { return chars.upperCase[Math.floor(Math.random() * chars.upperCase.length)]; },
  function numbers() { return chars.numbers[Math.floor(Math.random() * chars.numbers.length)]; },
  function symbols() { return chars.symbols[Math.floor(Math.random() * chars.symbols.length)]; }
];

// Create password
const createPassword = (event) => {

  // prevent page from refreshing
  event.preventDefault();

  // create variables from form selections
  const count = document.getElementById('count').value;
  const upper = document.getElementById('upperCase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;

  // create empty password variable that can be updated
  let password = '';

  // create list of characters to pull from
  let charList = 'abcdefghijklmnopqrstuvwxyz';
  if (upper) charList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers) charList += '0123456789'; 
  if (symbols) charList += '!@#$%^&*()_+~\\`|}{[]:;?><,./-=';  
  console.log(charList);

  // add new characters to password until count is hit
  while (password.length < count) {
    password += charList[Math.floor(Math.random() * charList.length)];
  }

  // add final password to text field on page
  passwordText.textContent = password;
}

// Call createPassword function after submitting form
form.addEventListener('submit', createPassword);


