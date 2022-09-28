var generateBtn = document.querySelector("#generate"); //locate our button using the generate id

function generatePassword(){

}

function writePassword(){
    var password = generatePassword(); //calls the generate password function and stores it in the password variable
    var passwordText = document.querySelector("#password"); //locate our text area based on the id of password

    passwordText.value = password; //populates our text area by storing what we have in password variable in our located passwordText variable
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //use eventListener function on our button