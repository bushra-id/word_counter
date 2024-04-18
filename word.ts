#! /usr/bin/env node
import inquirer from "inquirer"

// declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answers: {sentence: string} = await inquirer.prompt
(
    [
        {
            type: "input",
            name: "sentence",
            message: "Enter your sentence to count the words: "
        }
    ]
)

const word = answers.sentence.trim().split(" ")

//print the array of words to the console
console.log(word)

// print the word count of the sentence to the console
console.log(`you sentence word count is ${word.length} `);

