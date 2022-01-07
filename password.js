console.log("Welcome to the password validator!")
const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function hasLowerCase(input) {
    return input.toUpperCase() != input;
}
function hasUpperCase(input) {
    return input.toLowerCase() != input;
}
function containsNumber(input) {
    for(i = 0; i < input.length; i++){
        if(isNaN(input[i]) === false){
            return input;
        }
    }
}

reader.question("Please validate your password. ", function(input){
    if(input.length >= 10 && hasLowerCase(input) && hasUpperCase(input) && containsNumber(input)){
        console.log("Password successfully validated!")
    } else {
        console.log("Password validation was unsuccessful")
    }

    reader.close()
});