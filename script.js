// Assignment code here
var lowerCase = ["a","b","c"]
var upperCase = ["A", "B", "C"]
var numbers = [1, 2, 3]
var special = ["!", "%", "^"]
var guarenteedCharacters = []
var availableCharacters = []


function generatePassword(){
  var characters = 0;
  while(characters <8 || characters >128 || isNaN(characters)) {
    characters = prompt("How many characters would like; Choose a number between 8 and 128.");

  }
  var lower = confirm("Do you want to use lowercase characters?");
  var upper = confirm("would you like to use uppercase letters?");
  var num = confirm("You can use numbers if you like. Proceed?");
  var spec = confirm("You can also use special characters. Continue?");

  if (lower) {
    guarenteedCharacters.push(randomize(lowerCase));
    availableCharacters.concat(lowerCase);
  }
}

function randomize(characterArray) {
  var randomIndex = Math.floor(Math.random() * characterArray);
}
//console.log(parseInt(characters));
//var special = false
//while (!special) {
  //special = window.confirm("This password will include a mix of letters, numbers, and special characters. Ok to proceed?");
  //console.log(special);
//}
generatePassword();
//Take number of characters and plug in random values of different data types 
// results in completed password



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


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

//prompt uppercase
//prompt lowercase
//prompt numericals
//prompt special chs
