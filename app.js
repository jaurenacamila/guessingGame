let maximum = parseInt(prompt("Try to guess the number. Enter a maximum number OR 'q' to quit"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; //random number until maximum value
let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    attempts ++;
    if(!parseInt(guess)) {
        guess = prompt("Enter a valid number!");
    } else if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}
if (guess === 'q') {
    alert("OK! YOU QUIT")
} else {
    alert(`YOU GOT IT! The number was ${targetNum}. It took you ${attempts} guesses`)
};