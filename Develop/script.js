// Assignment Code
const generateBtn = document.querySelector("#generate");

let generatePassword = (count, upper, number, symbol) => {

}

// Write password to the #password input
const writePassword = () => {
  let password = createPassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
