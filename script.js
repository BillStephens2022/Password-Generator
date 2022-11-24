// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword

function generatePassword() {
  var newPassword = "";
  //User enters number of characters needed in password
  var numChar = parseInt(prompt("\n\nHow many characters does your password need to be? \n\n Number entered must be between 8 and 128 characters."));
  var numInvalid = Number.isNaN(numChar);
  // validation check in case a number isn't entered or number is outside range of 8 and 128 characters
  while (numInvalid || (numChar < 8) || (numChar > 128))  {
    numChar = parseInt(prompt("\n\nInvalid Entry.  Please pick a number between 8 and 128"));
    numInvalid = Number.isNaN(numChar);
  };
  //user confirms whether or not password needs upper case, lower case, number, special character
  var needUpper = confirm("\n\nDoes your password need an upper case letter?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  var needLower = confirm("\n\nDoes your password need a lower case letter?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  var needSpecChar = confirm("\n\nDoes your password need a special character?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  var needNum = confirm("Does your password need a number?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  var passwordModel = {
    numChar: numChar,
    needUpper: needUpper,
    needLower: needLower,
    needSpecChar: needSpecChar,
    needNum: needNum 
  }

  console.log(passwordModel);

  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var numString = "0123456789";
  var specCharString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var completeCharString = upperCaseString + lowerCaseString + numString + specCharString;  
  /* removed space from list of special characters at list from OWASP Foundation since 
  spaces are sometimes not permitted. */

  var charUsed = 0
  var remainingChar = numChar - charUsed;

  if (passwordModel.needUpper) {
    char1 = upperCaseString[Math.floor((Math.random() * upperCaseString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
  };

  if (passwordModel.needLower) {
    char2 = lowerCaseString[Math.floor((Math.random() * lowerCaseString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
  };

  if (passwordModel.needNum) {
    char3 = numString[Math.floor((Math.random() * numString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
  };

  if (passwordModel.needSpecChar) {
    char4 = specCharString[Math.floor((Math.random() * specCharString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
  };

  newPassword = char1 + char2 + char3 + char4;

  for (let i = 0; i < remainingChar; i++) {
    newChar = completeCharString[Math.floor((Math.random() * completeCharString.length))];
    newPassword = newPassword + newChar;
  };

  console.log(newPassword);
  console.log(newPassword.length);

  return newPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
