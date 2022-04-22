
// Get DOM
const passwordText = document.getElementById('password');
const form = document.getElementById('passGenerate');

// Create object with all char codes
const chars = {
  lowercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  uppercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  synbols: '!@#$%^&*()_+~\\`|}{[]:;?><,./-=',
}

// Create password
const createPassword = (count, upper, numbers, symbols) => {
  
}

// Checking options, calling password function, inserting password
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const count = document.getElementById('length').value;
  const upper = document.getElementById('uppercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;
  const password = createPassword(count, upper, numbers, symbols);
  // passwordText.innerText = password;
});


