// Array of special characters to be included in password
var passCharacters = [

  specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
],

// Array of numeric characters to be included in password
 numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],

// Array of lowercase characters to be included in password
 lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
],

// Array of uppercase characters to be included in password
 upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
], 
];

userPrompt = 0
userInputLength = 0
userInputArr = []
userSelection = []
let password = ""


// Function to prompt user for password options
function getPasswordOptions() {
   userPrompt = prompt("Please select a number between 8 and 128 to determine the length of your password")

  // // //yes/no prompts to collect data - need to convert them in boolean values once in array
    userInputNum = (prompt("Type yes or no if you would like your password to include numbers"))
    userInputCap = (prompt("Type yes or no if you would like your password to include capital letters"))
    userInputLow = (prompt("Type yes or no if you would like your password to include lowecase letters"))
    userInputSplChr = (prompt("Type yes or no if you would like your password to include special characters (!?_*)"));

   (userInputArr.push(userInputNum, userInputCap, userInputLow, userInputSplChr))

   userInputLength = userPrompt


   console.log(userInputLength)
   console.log(userInputArr)

  return

}

getPasswordOptions(userPrompt, userInputArr, userInputLength)

if (userInputNum==="yes") {
  passCharacters = passCharacters.concat(numericCharacters)
} 
  
if (userInputCap === "yes") {
  passCharacters = passCharacters.concat(upperCasedCharacters)
}

if (userInputLow === "yes") {
  passCharacters = passCharacters.concat(lowerCasedCharacters)
}

if (userInputSplChr === "yes") {
  passCharacters = passCharacters.concat(specialCharacters)
}

for (let j = 0; j < passCharacters.length; j++){
console.log(passCharacters[j])}

for (let x = 0; x < userInputLength; x++)
{
password = password.concat(getRandom(passCharacters))
}
console.log(password)

// Function for getting a random element from an array
function getRandom(array) 
{
  var numberRandom = array[Math.floor(Math.random() * array.length)]
  console.log(numberRandom)
  return numberRandom;
}
     
// Function to generate password with user input

function generatePassword() {
  
  password.length = userInputLength


return


}

// generatePassword(password)
 generatePassword(password)
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);