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

//Function responsible for generating password and criteria prompts
function generatePassword() {
  
  //Declares empty strings for password and character types
  var password = ""
  var characters = ""


  while(true) {

  //Declaring variables for/and prompting for password length between 8 and 128 characters
    var length = parseInt(prompt("What length?\nMust be between 8-128 characters."))

  //Validates that number input is valid.
    if(isNaN(length) === true || length < 8 || length > 128) {
      alert("Invalid.\nInput numbers between 8 & 128.")
      console.log(length);
    } else {
      break;
    } 
  }


  //Generates "Lowercase" prompt and console logs user's input
  // **While loop will repeat prompt until user input is valid.
  while(true) {
    var lower = prompt("Include Lowercase?\nYes/No")
    console.log(lower);
  
  //If no user input, return null and repeat prompt. 
    if(!lower) {
      return null;
    }

  //Validates user input is yes/no.
    if(lower.toLowerCase() !== "yes" && lower.toLowerCase() !== "no") {
      alert("Invalid Input.\nYes/No")
    } else {

      //If user input is valid, include lowercase character set in password generation.
      if(lower.toLowerCase() === "yes") {
        characters += LOWER_SET
      }
      break;
    }
  }

  
  //Generates "Uppercase" prompt and console logs user's input
  while(true) {
    var upper = prompt("Include Uppercase?\nYes/No")
    console.log(upper);

    //If no user input, return null and repeat prompt.
    if(!upper) {
      return null;
    }

    //Validates user input is yes/no.
    if(upper.toLowerCase() !== "yes" && upper.toLowerCase() !== "no") {
      alert("Invalid Input.\nYes/No")
    } else {

      //If user input is valid, include lowercase character set in password generation.
      if(upper.toLowerCase() === "yes") {
        characters += UPPER_SET
      }
      break;
    }
  }


  //Generates "Special Characters" prompt and console logs user's input
  while(true) {
    var special = prompt("Include Special Characters?\nYes/No")
    console.log(special);

    //If no user input, return null and repeat prompt.
    if(!special) {
      return null;
    }

    //Validates user input is yes/no.
    if(special.toLowerCase() !== "yes" && special.toLowerCase() !== "no") {
      alert("Invalid Input.\nYes/No")
    } else {

      //If user input is valid, include special character set in password generation.
      if(special.toLowerCase() === "yes") {
        characters += SPECIAL_SET
      }
      break;
    }
  }
  

  //Generates "Numbers" prompt and console logs user's input 
  while(true) {
    var number = prompt("Include Numbers?\nYes/No")
    console.log(number);

    //If no user input, return null and repeat prompt.
    if(!number) {
      return null;
    }

    //Validates user input is yes/no.
    if(number.toLowerCase() !== "yes" && number.toLowerCase() !== "no") {
      alert("Invalid Input.\nYes/No")
    } else {

      //If user input is valid, include number character set in password generation.
      if(number.toLowerCase() === "yes") {
        characters += NUM_SET
      }
      break;
    }
  }


  //Console log which charset generatePassword function pulls from
  console.log(characters)

  
  //Alerts invalid input if no character types are selected.
  if(characters.length === 0) {
    alert("Invalid Input.\nPlease select at least one character type.");
    return generatePassword()
  }


  //When password generated, pull randomly from each selected character set.
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
