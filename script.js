// Assignment code here
var lowerCase = ["a","b","c","d","e","f"]
var upperCase = ["A", "B", "C","D","E","F"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  if (upper) {
    guarenteedCharacters.push(randomize(upperCase));
    availableCharacters.concat(upperCase);
  }
  if (num) {
    guarenteedCharacters.push(randomize(numbers));
    availableCharacters.concat(numbers);
  }
  if (spec) {
    guarenteedCharacters.push(randomize(special));
    availableCharacters.concat(special);
  }
  for (var i = guarenteedCharacters.length; i < characters; i++){
    guarenteedCharacters.push(randomize(guarenteedCharacters))
  } 
  return guarenteedCharacters.join(availableCharacters);
}



function randomize(characterArray) {
  var randomIndex = Math.floor(Math.random() * characterArray.length);
  return characterArray [randomIndex];
}






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

writePassword()
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
