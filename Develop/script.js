
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
    
    password += '1';
  }

  console.log(password);

  // add final password to text field on page
  //passwordText.innerText = password;
}

// Call createPassword function after submitting form
form.addEventListener('submit', createPassword);


