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
  var upperCaseArray = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'];
  var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numArray = [0,1,2,3,4,5,6,7,8,9];
  var specCharArray = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<',
    '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  
  console.log(passwordModel);
  
  return "Hello"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
