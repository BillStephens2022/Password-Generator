// Assignment Code
var generateBtn = document.querySelector("#generate");

/* function generatePassword summary - function prompts user for length of password and which types of characters are required (uppercase, lowercase, number, special characters).
    The function will then randomly select the remaining characters from the full character set and the required characters will be appended.  Once call the characters are
    selected, the password will then be shuffled to add another layer of randomness. There are validation checks to make sure that user selects a password between 8-128 characters,
    and that at least one criteria is selected for required characters. */
    

function generatePassword() {
  
  // Declare Variables

  // Character sets
  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var numString = "0123456789";
  var specCharString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var completeCharString = upperCaseString + lowerCaseString + numString + specCharString;    
  /* Intentionally removed the 'space' character from OWASP Foundation list of special characters since 
  spaces are sometimes not permitted. */

  // default values of variables
  var newPassword = "";
  var needUpper = false;
  var needLower = false;
  var needNum = false;
  var needSpecChar = false;
  var requiredChar = "";

  //User enters number of characters needed in password
  var numChar = parseInt(prompt("\n\nHow many characters does your password need to be? \n\n Number entered must be between 8 and 128 characters."));
  var numInvalid = Number.isNaN(numChar);

  /* charUsed to represent the number of password characters where a certain type is required
    which is up to 4 (i.e. uppercase, lowercase, number, special character).  The remainingChar
    variable is the number of characters that can be chosen randomly from the full set of 
    characters (i.e. completeCharString). */

  var charUsed = 0
  var remainingChar = numChar - charUsed;

  // validation check in case a number isn't entered or number is outside range of 8 and 128 characters
  while (numInvalid || (numChar < 8) || (numChar > 128))  {
    numChar = parseInt(prompt("\n\nInvalid Entry.  Please pick a number between 8 and 128"));
    numInvalid = Number.isNaN(numChar);
  };

  //user confirms whether or not password needs upper case, lower case, number, special character

  needUpper = confirm("\n\nDoes your password need an upper case letter?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  needLower = confirm("\n\nDoes your password need a lower case letter?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  needNum = confirm("Does your password need a number?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
  needSpecChar = confirm("\n\nDoes your password need a special character?\n\nPress 'OK' for Yes, Press 'Cancel' for No");

  //validation check to make sure user confirmed that at least one of the following character types is needed.
  while (needUpper === false &&
        needLower === false &&
        needNum === false && 
        needSpecChar === false) {
          alert("Invalid responses. \n\nYour password must need at least one type of character \n\n(i.e. uppercase, lowercase, number, special character)");
          needUpper = confirm("\n\nDoes your password need an upper case letter?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
          needLower = confirm("\n\nDoes your password need a lower case letter?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
          needNum = confirm("Does your password need a number?\n\nPress 'OK' for Yes, Press 'Cancel' for No");
          needSpecChar = confirm("\n\nDoes your password need a special character?\n\nPress 'OK' for Yes, Press 'Cancel' for No");   
  };

  /* if statements used for the required characters where needed. Variables used to
    keep track of charUsed, remainingChar, and requiredChar.  Each index of the requiredChar string 
    will ultimately be inserted into the newPassword string at random indices. */

  if (needUpper) {
    char1 = upperCaseString[Math.floor((Math.random() * upperCaseString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
    requiredChar = requiredChar + char1;
  };

  if (needLower) {
    char2 = lowerCaseString[Math.floor((Math.random() * lowerCaseString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
    requiredChar = requiredChar + char2;
  };

  if (needNum) {
    char3 = numString[Math.floor((Math.random() * numString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
    requiredChar = requiredChar + char3;
  };

  if (needSpecChar) {
    char4 = specCharString[Math.floor((Math.random() * specCharString.length))];
    charUsed++
    remainingChar = numChar - charUsed;
    requiredChar = requiredChar + char4;
  };

  /* for loop used to randomly select the characters for the remaining portion of the 
    after the required characters are selected. */

  for (let i = 0; i < remainingChar; i++) {
    var newChar = completeCharString[Math.floor((Math.random() * completeCharString.length))];
    newPassword = newPassword + newChar;
  };

  newPassword = newPassword + requiredChar;

  // function for shuffling the password characters to add another layer of randomness

  function shuffleString(s) {
    var splitString = newPassword.split("");     //converts string into an array
    // for loop to shuffle array
    for(var i = numChar - 1; i>0; i--) {         //shuffles characters
      var j = Math.floor(Math.random() * (i+1));      
      var tmp = splitString[i];
      splitString[i] = splitString[j];
      splitString[j] = tmp;
    };
    newPassword = splitString.join("");  //converts array back to string
    return s;
  }

  shuffleString(newPassword);

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
