#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a random number
// 2)user input for guessing number
// 3) compare user input number and computer generated number then shown result
 
const randomNumber = Math.floor(Math.random() *10 +1);
const answer = await inquirer.prompt([
    {
        name :"userGuessedNumber",
        type : "number",
        message : "please guess a number between 1 to 6",
    },
]);
if(answer.userGuessedNumber===randomNumber) {
    console.log("CONGRRATULATION! YOU GUESSED A RIGHT NUMBER.");
} else {
    console.log("SORRY! YOU GUESSED A WRONG NUMBER.");
}






