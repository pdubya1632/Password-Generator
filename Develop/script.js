// Assignment Code
const generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  let passCriteria = window.prompt("Password criteria?");
  let passLength = window.prompt("Password length?");
  let passCharacterType = window.prompt("Password character types?");

// password criteria
// select which criteria to include in the password
// length of the password
// choose a length of at least 8 characters and no more than 128 characters
// asked for character types to include in the password
// confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

}

// Write password to the #password input
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
