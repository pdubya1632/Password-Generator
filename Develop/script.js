// Assignment Code
const generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  let passLength = window.prompt("Enter the length of your password", "Choose a number btwn 8 and 128");
  let lowercase = window.prompt("Do you want lowercase characters?", "Y or N");
  let uppercase = window.prompt("Do you want uppercase characters?", "Y or N");
  let numeric = window.prompt("Do you want numeric characters?", "Y or N");
  let special = window.prompt("Do you want special characters?", "Y or N");

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
