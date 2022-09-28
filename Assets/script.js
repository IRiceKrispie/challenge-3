var generateBtn = document.querySelector("#generate"); //locate our button using the generate id

//this is our main function that will generate our password 
function generatePassword(){
  //initiate our variables and our arrays with our special characters
  var passwordBuilder = "";
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialCharcters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
  var capAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //boolean variables to check if the user wants this type of character or not. They all start as false.
  var ifLowerCase = false;
  var ifSpecialCharacters = false;
  var ifCapAlphabet = false;
  var ifNumbers = false
}

//this function gets our generated password and uses it as text
function writePassword(){
    var password = generatePassword(); //calls the generate password function and stores it in the password variable
    var passwordText = document.querySelector("#password"); //locate our text area based on the id of password

    passwordText.value = password; //populates our text area by storing what we have in password variable in our located passwordText variable
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //use eventListener function on our button, calls writePassword function on click