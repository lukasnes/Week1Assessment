console.log("Welcome to the password validator!")
const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please validate your password. ", function(input){
    if(input.length >= 10){
        console.log("Password successfully validated!")
    } else {
        console.log("Password validation was unsuccessful")
    }
    reader.close()
});