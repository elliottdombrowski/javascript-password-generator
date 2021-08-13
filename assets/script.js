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

  while(true) {

    //Declaring variables for/and prompting for password length between 8 and 128 characters
    var length = parseInt(prompt("What length?\nMust be between 8-128 characters."))

    //Validates that input is valid.
    if(isNaN(length) === true || length < 8 || length > 128) {
      alert("Invalid.\nInput numbers between 8 & 128.")
      console.log(length);
    } else {
      break;
    } 
  }


  //If user input = yes, pull characters from respective set (Upper, Lower, Special, Numbers)
  while(true) {
    var lower = prompt("Include Lowercase?\nYes/No")
    if (lower.toLowerCase() === "yes") {
      characters += LOWER_SET
      break;
    } else if(lower.toLowerCase() === "no") {
      break;
    } else {
      alert("Invalid Input.\nYes/No")
    }
  }

  //USE THIS FORMAT LATER.
  //COMMENT THIS LATER TOO.
  while(true) {
    var upper = prompt("Include Uppercase?\nYes/No")
    console.log(upper);
    if(!upper) {
      return null;
    }

    //Edit alerts to be more descriptive.
    if(upper.toLowerCase() !== "yes" && upper.toLowerCase() !== "no") {
      alert("Invalid Input")
    } else {
      if(upper.toLowerCase() === "yes") {
        characters += UPPER_SET
      }
      break;
    }
  }

  var special = prompt("Include Special Characters?\nYes/No")
  if(special.toLowerCase() === "yes") {
    characters += SPECIAL_SET
  }

  var number = prompt("Include Numbers?\nYes/No")
  if(number.toLowerCase() === "yes") {
    characters += NUM_SET
  }

  //Console log which charset generatePassword function pulls from
  console.log(characters)

  if(characters.length === 0) {
    alert("Invalid Input.\nPlease select at least one character type.");
    return generatePassword()
  }

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
