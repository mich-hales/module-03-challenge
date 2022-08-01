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

// Creating the criteria for the password generator and defining variables above 
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

// If 3 out of the 4 criteria are true
else if (upperChars && lowerChars && numberChars) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}

else if (upperChars && lowerChars && specialChars) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}

else if (upperChars && specialChars && numberChars) {
  userChoices = upperCase.concat(special, numbers);
  console.log(userChoices);
}

else if (lowerChars && specialChars && numberChars) {
  userChoices = lowerCase.concat(special, numbers);
  console.log(userChoices);
}


// If 2 out of the 4 criteria are true 
else if (upperChars && lowerChars) {
  userChoices = upperCase.concat(lowerCase);
  console.log(userChoices);
}

else if (upperChars && numberChars) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}

else if (upperChars && specialChars) {
  userChoices = upperCase.concat(special);
  console.log(userChoices);
}

else if (lowerChars && numberChars) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}

else if (lowerChars && specialChars) {
  userChoices = lowerCase.concat(special);
  console.log(userChoices);
}

else if (numberChars && specialChars) {
  userChoices = numbers.concat(special);
  console.log(userChoices);
}

// 1 option out of the 4 is selected

else if (upperChars) {
  userChoices = upperCase;
  console.log(userChoices);
}

else if (lowerChars) {
  userChoices = lowerCase;
  console.log(userChoices);
}

else if (numberChars) {
  userChoices = numbers;
  console.log(userChoices);
}

else if (specialChars) {
  userChoices = special;
  console.log(userChoices);
}

// variable to include/display entire password 
var passwordCart = [];

// for loop to ensure random selection
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordCart.push(allChoices);
  console.log(allChoices);
}

// Used join so the password wasn't separated by commas and return the password to complete the function
var password = passwordCart.join("");
  console.log(`Your password is: ${password}`);
  return password;
}



