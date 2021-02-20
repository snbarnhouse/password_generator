// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variables
var numberChoices;
var lowerCase;
var upperCase;
var specialCharacters;
//Values of variables
numberChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}", ";", ":", "'", "<", ">", "?", "/", "|"];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  alert('on click works')
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

var passwordLength = passwordLengthSelectFunction()
if (passwordLength !== null) {
   var specialCharacters = specialCharacterPrompt()
}

// function passwordLengthSelectFunction() {
//   var passwordLength = prompt('Please Select a Password Length Between 8 and 128 characters')
//   if (parseInt(passwordLength) >=8 && parseInt(passwordLength) <=128 && passwordLength !== '') {
//      return passwordLength
//  } else if (passwordLength !== null) {
//     // call passwordLengthSelectFunction Again
//       return passwordLengthSelectFunction()
//  }
//  else {
//   // Confirms for user choices
//   confirmNumberchoices = confirm("Would you like your password to contain numbers?");
//   confirmLowercase = confirm("Would you like your password to contain lowercase letters?");
//   confirmUppercase = confirm("Would you like your password to contain uppercase letters?");
//   confirmSpecialcharacters = confirm("Would you like your password to contain special characters?");
// };
// //If they don't choose from criteria
// if (!confirmNumberchoices && !confirmLowercase && !confirmUppercase && !confirmSpecialcharacters) {
//   alert ("Please choose from the criteria.")
// }
// //User wants all 4
// else if (confirmNumberchoices && confirmLowercase && confirmUppercase && confirmSpecialcharacters) {
//   //idk what to put here
// }
// //User wants 3
// else if (confirmNumberchoices && confirmLowercase && confirmUppercase) {
//   //Something here
// }
// else if (confirmNumberchoices && confirmLowercase && confirmSpecialcharacters) {
//   //Something
// }
// else if (confirmLowercase && confirmUppercase && confirmSpecialcharacters) {
//   //Something
// }
// else if (confirmNumberchoices && confirmUppercase && confirmSpecialcharacters ) {
//   //Something
// }
// //User wants 2
// else if (confirmNumberchoices && confirmLowercase) {
//   //Something
// }
// else if (confirmNumberchoices && confirmUppercase) {
//   //Something
// }
// else if (confirmNumberchoices && confirmSpecialcharacters) {
//   //Something
// }
// else if (confirmLowercase && confirmUppercase) {
//   //Something
// }
// else if (confirmLowercase && confirmSpecialcharacters) {
//   //Something
// }
// else if (confirmUppercase && confirmSpecialcharacters) {
//   //Something
// }
// //User wants 1
// else if (confirmNumberchoices) {
//   //Something
// }
// else if (confirmLowercase) {
//   //Something
// }
// else if (confirmUppercase) {
//   //Something
// }
// else if (confirmSpecialcharacters) {
//   //Something
// }