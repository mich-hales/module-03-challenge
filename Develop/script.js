// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring variables 
var upperChars;
var lowerChars;
var numberChars;
var specialChars;
var passwordLength;
var userChoices;


// Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Function for generatePassword() to complete function writePassword()
function generatePassword() {
  // First prompt after clicking on generate password 
  passwordLength = prompt("Choose between 8 and 128 characters for your password");
  console.log(`Password Length: ${passwordLength}`);

// If nothing is entered
if (!passwordLength) {
  alert ("Required");
} 

// If the password length doesn't meet the requirements
else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You must choose between 8 and 128 characters");
  console.log(`Password Length: ${passwordLength}`);
}

// Creating the criteria for the password generator 
else {
  upperChars = confirm("Click OK if you would like to include uppercase characters");
  console.log(`Uppercase: ${upperChars}`);
  lowerChars = confirm("Click OK if you would like to include lowercase characters");
  console.log(`Lowercase: ${lowerChars}`);
  numberChars = confirm("Click OK if you would like to include numerical characters");
  console.log(`Numerical Characters: ${numberChars}`);
  specialChars = confirm("Click OK if you would like to include special characters");
  console.log(`Special Characters: ${specialChars}`);
};


// If none of the options are selected
if (!upperChars && !lowerChars && !numberChars && !specialChars) {
  userChoices = alert("You must select at least one option");
} 

// If all 4 are true 
else if (upperChars && lowerChars && numberChars && specialChars) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}
