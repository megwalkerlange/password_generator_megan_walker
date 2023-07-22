// Array of special characters to be included in password
var specialCharacters = [
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
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
];

userPrompt = 0
userInputLength = 0
userInputArr= []

// Function to prompt user for password options
 function getPasswordOptions() {
userPrompt = prompt("Please select a number between 8 and 128 to determine the length of your password")
userInputNum= (prompt("Type yes or no if you would like your password to include numbers") )
                    // prompt("Type yes or no if you would like your password to include capital letters") +
                    // prompt("Type yes or no if you would like your password to include lowecase letters") + 
userInputSplChr = (prompt("Type yes or no if you would like your password to include special characters (!?_*)"));
 
userInputArr.push(userInputNum,userInputSplChr);
  
var userInputLength = userPrompt

  
console.log(userInputLength)
console.log(userInputArr)
return

}

getPasswordOptions(userPrompt);

// Function for getting a random element from an array
var numberRandom = 0

function getRandom(array) {
for (let i=0; i < array.length; i++);
var numberRandom = array[Math.floor(Math.random()*array.length)]
    console.log(numberRandom)
return;
}

getRandom(specialCharacters) 
getRandom(numericCharacters)
getRandom(lowerCasedCharacters)
getRandom(upperCasedCharacters)

// Function to generate password with user input

var passLength = 0
var password = 0

function generatePassword() {

  //some sort of loop that sets the getRandom to loop until the condition (password length) has been met//
  //if else statements to select the correct arrays as per the user input//


   
  

  

//   console.log(password)
// return;

}

generatePassword(password)
// generatePassword(specialCharacters)
// generatePassword(numericCharacters)
// generatePassword(lowerCasedCharacters)
// generatePassword(upperCasedCharacters)


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