// Assignment Code
var generateBtn = document.querySelector("#generate");

/* function generatePassword summary - function prompts user for length of password and which types of characters are required (uppercase, lowercase, number, special characters).
    The function will then randomly select the characters from a character set based on the user selections. There are validation checks to make sure that user selects a password between 8-128 characters,
    and that at least one criteria is selected for required characters. */
    

function generatePassword() {
  
  // Declare Variables

  // Character sets
  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var numString = "0123456789";
  var specCharString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charString = "";   // will be used to concatentate character sets above based on user selections
    
  /* Intentionally removed the 'space' character from OWASP Foundation list of special characters since 
  spaces are sometimes not permitted. */

  // default values of variables
  var newPassword = "";
  var needUpper = false;
  var needLower = false;
  var needNum = false;
  var needSpecChar = false;

  //User enters number of characters needed in password
  var numChar = parseInt(prompt("\n\nHow many characters does your password need to be? \n\n Number entered must be between 8 and 128 characters."));
  var numInvalid = Number.isNaN(numChar);

  // validation check in case a number isn't entered or number is outside range of 8 and 128 characters
  while (numInvalid || (numChar < 8) || (numChar > 128))  {
    numChar = parseInt(prompt("\n\nInvalid Entry.  Please pick a number between 8 and 128"));
    numInvalid = Number.isNaN(numChar);
  };

  //user confirms whether or not password requires upper case, lower case, number, special character

  needUpper = confirm("\n\nDoes your password require upper case letters?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  needLower = confirm("\n\nDoes your password require lower case letters?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  needNum = confirm("Does your password require numbers?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  needSpecChar = confirm("\n\nDoes your password require special characters?\n\nPress 'OK' for Yes, Press 'Cancel' for No");

  //validation check to make sure user confirmed that at least one of the following character types is needed.
  while (needUpper === false &&
        needLower === false &&
        needNum === false && 
        needSpecChar === false) {
          alert("Invalid responses. \n\nYour password must require at least one type of character \n\n(i.e. uppercase, lowercase, number, special character)");
          needUpper = confirm("\n\nDoes your password require upper case letters?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
          needLower = confirm("\n\nDoes your password require lower case letters?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
          needNum = confirm("Does your password require numbers?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
          needSpecChar = confirm("\n\nDoes your password require special characters?\n\nPress 'OK' for Yes, Press 'Cancel' for No");   
  };

  // Using 'if' statements, the character sets are then concatenated into a variable called 'charString' based on the user selections.

  if (needUpper) {
    charString = charString + upperCaseString;
  };

  if (needLower) {
    charString = charString + lowerCaseString;
  };

  if (needNum) {
    charString = charString + numString;
  };

  if (needSpecChar) {
    charString = charString + specCharString;
  };

  /* for loop used to randomly select the characters needed based on the charString variable which 
  contains the full character set based on user input */

  for (let i = 0; i < numChar; i++) {
    var newChar = charString[Math.floor((Math.random() * charString.length))];
    newPassword = newPassword + newChar;
  };

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
