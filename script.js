// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var parse = parseInt()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//button
//when click button, choose criteria
//choose lenght (8 10 128 char)
//choose types (lowercase, uppercase, numeric and/or special)
//input should be validated upon selection
//after all prompts password generated
//password displayed

//onclick??
//for and while
//array
//switch

//prompt
