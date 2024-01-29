// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  // i need a password option that gives the user ability to have a lowercase letter, uppercase letter, a number, and/or special character(s)
  let lowerCase = confirm("Do you want a lowercase letter");
  let upperCase = confirm("Do you want a uppercase letter");
  let Num = confirm("Do you want a a number");
  let specialChar = confirm("Do you want special character(s)");
  console.log(lowerCase);
  console.log(upperCase);
  console.log(Num);
  console.log(specialChar);
if (!specialChar){
    charset = charset.replace(/[@!#$%^&*()+]/g,''); 
    console.log(charset); 
  }
  if (!Num){
    charset = charset.replace(/[0-9]/g, '');
    console.log(charset);
  }
  if (!lowerCase){
    charset = charset.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '');
    console.log(charset);
  }
  if (!upperCase){
    charset = charset.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '');
    console.log(charset);
  }
  
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charset.length);
    password += charset.substring(randomNumber, randomNumber +1);
   }
   return password;
}
   passwordText = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// //  GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page