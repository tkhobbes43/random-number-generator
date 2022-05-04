// Collect input from a user
const inputHigh = prompt('Please provide a number');

// Convert the input to a number
const highNumber = parseInt(inputHigh);

// Select the <main> HTML element
const main = document.querySelector('main');

// Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor( Math.random() * highNumber ) + 1;

// Create a message displaying the random number
main.innerHTML = `
    <h2>${randomNumber} is a random number between 1 and ${highNumber}.

`;
