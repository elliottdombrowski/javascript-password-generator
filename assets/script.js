// Assignment Code
var generateBtn = document.querySelector("#generate");





//Declaring global variables for uppercase/lowercase letters, special characters, and numbers
var LOWER_SET = "abcdefghijklmnopqrstuvwxyz"
var UPPER_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var SPECIAL_SET = "!@#$%^&*"
var NUM_SET = "1234567890"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var password = ""
  var characters = ""

  //Declaring variables for/and prompting for password length between 8 and 128 characters
  var length = parseInt(prompt("What length?\nMust be between 8-128 characters."))

  //Declaring variables for/and prompting for uppercase/lowercase characters
  var lower = prompt("Include Lowercase?\nYes/No")
  var upper = prompt("Include Uppercase?\nYes/No")

  //Declaring variables for/and prompting for special characters
  var special = prompt("Include Special Characters?\nYes/No")

  //Declaring variables for numbers(1-9)
  var number = prompt("Include Numbers?\nYes/No")


  //If user input = yes, pull characters from respective set (Upper, Lower, Special, Numbers)
  if(lower.toLowerCase() === "yes") {
    characters += LOWER_SET
  }

  if(upper.toLowerCase() === "yes") {
    characters += UPPER_SET
  }

  if(special.toLowerCase() === "yes") {
    characters += SPECIAL_SET
  }

  if(number.toLowerCase() === "yes") {
    characters += NUM_SET
  }

  //Console log which charset generatePassword function pulls from
  console.log(characters)

  for(var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * characters.length)
    password += characters[index]

    //Console log which index generatePassword function pulls from
    console.log("index: " + index + " char: " + characters[index])
  }

  return password 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
