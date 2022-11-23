// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword

function generatePassword() {
  var newPassword = "";
  var numChar = parseInt(prompt("\n\nHow many characters does your password need to be? \n\n Number entered must be between 8 and 128 characters."));
  var numInvalid = Number.isNaN(numChar);
  while (numInvalid || (numChar < 8) || (numChar > 128))  {
    numChar = parseInt(prompt("\n\nInvalid Entry.  Please pick a number between 8 and 128"));
    numInvalid = Number.isNaN(numChar);
  };
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
  console.log(numInvalid)
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
