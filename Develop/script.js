// Special Characters
var specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', ';', ',', '.', '/', '<', '>', '?', ':', '`', '~'
];

//Numbers
var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// Upper cas letters
var upperCaseLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// lower case letters
var lowerCaseLetters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Password options
function getPasswordOptions() {

  // Lenth of passord prompt
  var length = parseInt(
    window.prompt('How many characters would you like your pasword to be?')
  );

  if (isNaN(length) === true) {
    window.alert('Password must be a number');
    return;
  }

  if (length < 8) {
    window.alert('Password length must be at least 8 characters');
    return;
  }

  if (length > 128){
    window.alert('Password must be less that 129 characters');
    return;
  }

  // confirming if special characters are wanted.
  var special = window.confirm(
    'Click OK to confirm including special characters.'
  );

  // confirming if numbers are wanted.
  var hasNumericCharacters = window.confirm(
    'Click OK to confirm including numeric characters.'
  );

  // confirming if lower case letters are wanted.
  var hasLowerCasedCharacters = window.confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // confirming if upper case letters are wanted.
  var hasUpperCasedCharacters = window.confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // making sure the person can't skip all the windows
  if (
    special === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // To store user input
  var passwordOptions = {
    length: length,
    special: special,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variables to store the retuned elements
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  // Push new random special character to guaranteedCharacters
  if (options.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    guaranteedCharacters.push(getRandom(lowerCaseLetters));
  }

  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    guaranteedCharacters.push(getRandom(upperCaseLetters));
  }

  // For loop to add on the end of the result from the possible characters
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Use at least one of each guaranteed character
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Take the result to writePassword
  return result.join('');


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
