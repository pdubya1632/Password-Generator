
// Get elements on page
const passwordText = document.getElementById('password');
const form = document.getElementById('passGenerate');

// Create object with all char codes
const chars = {
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~\\`|}{[]:;?><,./-='
}

// Create password
const createPassword = (event) => {
  // generateChars = [];
  // while (count.length > generateChars.length) {
  //   return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)];
  // }
  event.preventDefault();
  const count = document.getElementById('length').value;
  const upper = document.getElementById('uppercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;

  //passwordText.innerText = password;
}

// Call createPassword function after submitting form
form.addEventListener('submit', createPassword);


