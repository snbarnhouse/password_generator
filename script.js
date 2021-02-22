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
//function ask user for number of characters they must choose between 8 and 128
function passwordLengthSelectFunction() {
  var passwordLength = prompt('Please Select a Password Length Between 8 and 128 characters')
  if (parseInt(passwordLength) >=8 && parseInt(passwordLength) <=128 && passwordLength !== '') {
    return passwordLength
  } else if (passwordLength !== null) {
    // call passwordLengthSelectFunction Again
    return passwordLengthSelectFunction()
  }
}
// Write password to the #password input
function writePassword() {
  console.log(passwordLength)
  console.log(confirmNumberchoices)
  console.log(confirmLowercase)
  console.log(confirmSpecialcharacters)
  console.log(confirmUppercase)
  var password = generatePassword()
  var passwordText = document.querySelector('#password')
  passwordText.value = password
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
//confirm criteria they would like included in password
function generatePassword() {
  passwordLength = passwordLengthSelectFunction()
  if (passwordLength && passwordLength !== null) {
  confirmNumberchoices = confirm(
    'Would you like your password to contain numbers?'
  )
  confirmLowercase = confirm(
    'Would you like your password to contain lowercase letters?'
  )
  confirmUppercase = confirm(
    'Would you like your password to contain uppercase letters?'
  )
  confirmSpecialcharacters = confirm(
    'Would you like your password to contain special characters?'
  )
}
//generate password from selected criteria
  if (confirmNumberchoices) {
    combineCharacters = combineCharacters.concat(numberChoices)
  }
  if (confirmSpecialcharacters) {
    combineCharacters = combineCharacters.concat(specialCharacters)
  }
  if (confirmUppercase) {
    combineCharacters = combineCharacters.concat(upperCase)
  }
  if (confirmLowercase) {
    combineCharacters = combineCharacters.concat(lowerCase)
  }
  //combine all characters
  console.log(combineCharacters)
  //for loop
  for (var i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * combineCharacters.length)
    result.push(combineCharacters[randomIndex])
  }
  //log and display password
  console.log(result)
  return result.join('')
}