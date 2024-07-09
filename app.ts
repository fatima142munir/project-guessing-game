// import inquirer 
import inquirer from "inquirer";

// create variable for rando number
let guess: number=Math.floor(Math.random()*10+1);

// create variable for take input
let guessNumber = await inquirer.prompt(
    {
        message: "Enter a number from 1 to 10: ",
        type: "number",
        name: "yourGuess"

    }
)

// Create program to check guess number is right or not
if(guessNumber.yourGuess == guess){
    console.log("Congrat..!!! Your guess is RIGHT..")
}else{
    console.log("TRY AGAIN...")
}