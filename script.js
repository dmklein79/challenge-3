// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define constants of string options (for upper case, lower case, numbers, and special characters)
const upperChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChar='abcdefghijklmnopqrstuvwxyz';
const numberChar='0123456789';
const specialChar='!@#$%^&*()<>?:{}|+_-=;[]\,./';
// Then put them into their own arrays, from which later on will pull selections, at random
const upperCharArray=upperChar.split('');
const lowerCharArray=lowerChar.split('');
const numberCharArray=numberChar.split('');
const specialCharArray=specialChar.split('');

// this is going to be the final array used to display the generated password
var passwordArray = [];
// easier to include this function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {
// i want to have five variables representing what I receive from the user
// for these, OK = true, Cancel = false
  var length = window.prompt("Enter length of password in number form between 8 and 128 characters:");
// first need to make sure user enters valid password length 
  if (length<8 || length>128){
    return("Not a valid selection, your password has to be between 8 and 128 characters.")
  }
// if length is valid number, then proceed with 4 other prompts
  var lowerYes = window.confirm("Include lower case letters?"); 
  var upperYes = window.confirm("Include upper case letters?");
  var numberYes = window.confirm("Include numbers?");
  var specialYes = window.confirm("Include special characters?");
// because there are four boolean values, the number of different combos is 2^4=16, thus there are 16 if/then cases here 
  if (!lowerYes && !upperYes && !numberYes && !specialYes) {
    return("Not a valid selection, your password has to contain some sort of character.")
  }
    else if (lowerYes && !upperYes && !numberYes && !specialYes) {
      for (var i=0; i<length; i++){
        passwordArray.push(lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)]);
      }
    }
// the lengh of the array doesn't stay at the user selected length, instead I have decided to divide it by
// essentially the number of yes's, because for each yes the for loop takes one more character
// then in the end I pop out of the array the difference between (length/3)*3 and length, because of how numbers get handled
   else if (lowerYes && !upperYes && numberYes && specialYes) {
      for (var i=0; i<=length/3; i++){
          passwordArray.push(lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)]);
          passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
          passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
        }
    }
    else if (lowerYes && upperYes && !numberYes && !specialYes){
      for (var i=0; i<Math.ceil(length/2); i++){
        passwordArray.push(lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)]);
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
      }
    }
    else if (lowerYes && upperYes && numberYes && !specialYes){
      for (var i=0; i<Math.ceil(length/3); i++){
        passwordArray.push(lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)]);
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
        passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
      }
    }
    else if (lowerYes && upperYes && numberYes && specialYes){
      for (var i=0; i<Math.ceil(length/4); i++){
        passwordArray.push(lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)]);
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
        passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
        passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
      }
    }
    else if (!lowerYes && upperYes && !numberYes && !specialYes) {
      for (var i=0; i<length; i++){
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
      }
    }
    else if (!lowerYes && upperYes && numberYes && !specialYes){
      for (var i=0; i<Math.ceil(length/2); i++){
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
        passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
      }
    }
    else if (!lowerYes && upperYes && numberYes && specialYes){
      for (var i=0; i<Math.ceil(length/3); i++){
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
        passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
        passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
      }
    }
    else if (!lowerYes && !upperYes && numberYes && !specialYes) {
      for (var i=0; i<length; i++){
        passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
      }
    }
    else if (!lowerYes && !upperYes && numberYes && specialYes){
      for (var i=0; i<Math.ceil(length/2); i++){
        passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
        passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
      }
    }
    else if (!lowerYes && !upperYes && !numberYes && specialYes){
      for (var i=0; i<length; i++){
        passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
      }
    }
    else if (!lowerYes && upperYes && !numberYes && specialYes){
      for (var i=0; i<Math.ceil(length/2); i++){
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
        passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
      }
    }
    else if (lowerYes && !upperYes && numberYes && !specialYes){
      for (var i=0; i<Math.ceil(length/2); i++){
        passwordArray.push(lowerCharArray[Math.floor(Math.random() * numberCharArray.length)]);
        passwordArray.push(numberCharArray[Math.floor(Math.random() * numberCharArray.length)]);
      }
    }
    else if (lowerYes && !upperYes && !numberYes && specialYes){
      for (var i=0; i<Math.ceil(length/2); i++){
        passwordArray.push(lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)]);
        passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
      }
    }
    else if (lowerYes && upperYes && !numberYes && specialYes){
      for (var i=0; i<Math.ceil(length/3); i++){
        passwordArray.push(upperCharArray[Math.floor(Math.random() * upperCharArray.length)]);
        passwordArray.push(lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)]);
        passwordArray.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
      }
    }

  // Randomize array in-place using Durstenfeld shuffle algorithm
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
    }

  var difference = passwordArray.length-length;
  for (var i=0; i<difference; i++){
    passwordArray.pop();
  }
// At the end is when the array gets shuffled
// Admittedly I do recognize that there are probably other ways to get the randomized array of the correct length
  passwordArray=shuffleArray(passwordArray);
  passwordArray=passwordArray.join('');
  return passwordArray;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);