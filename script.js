// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variables
var passwordLength;
var confirmNumberchoices;
var confirmLowercase;
var confirmUppercase;
var confirmSpecialcharacters;
//Values of variables
var numberChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}", ";", ":", "'", "<", ">", "?", "/", "|"];
var combineCharacters= [];
var result = [];
// Write password to the #password input
function writePassword() {
  // passwordLengthSelect()
  console.log(passwordLength)
  console.log(confirmNumberchoices)
  console.log(confirmLowercase)
  console.log(confirmSpecialcharacters)
  console.log(confirmUppercase)
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

// var passwordLength = passwordLengthSelectFunction()
// if (passwordLength !== null) {
//    var specialCharacters = specialCharacterPrompt()
// }

function generatePassword() {
  passwordLength = parseInt(prompt('Please Select a Password Length Between 8 and 128 characters'))
//   if (parseInt(passwordLength) >=8 && parseInt(passwordLength) <=128 && passwordLength !== '') {
//      return passwordLength
//  } else if (enter <8 || enter > 128) {
//     enter = parseInt(prompt("You must choose between 8 and 128"));
//  }
//  else {
  // Confirms for user choices
  confirmNumberchoices = confirm("Would you like your password to contain numbers?");
  confirmLowercase = confirm("Would you like your password to contain lowercase letters?");
  confirmUppercase = confirm("Would you like your password to contain uppercase letters?");
  confirmSpecialcharacters = confirm("Would you like your password to contain special characters?");
  if (confirmNumberchoices){
    combineCharacters = combineCharacters.concat(numberChoices)
  }
  if (confirmSpecialcharacters){
    combineCharacters = combineCharacters.concat(specialCharacters)
  }
  if (confirmUppercase){
    combineCharacters = combineCharacters.concat(upperCase)
  }
  if (confirmLowercase){
    combineCharacters = combineCharacters.concat(lowerCase)
  }
  
  console.log(combineCharacters)
  for (var i = 0; i<passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * combineCharacters.length);
  result.push(combineCharacters[randomIndex])
}
console.log(result);
return result.join("");
}