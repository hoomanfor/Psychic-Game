var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("randomAlphabet: " + randomAlphabet);

var wins = 0;
var losses = 0;
var guesses = 9;
var alreadyGuessed = [];
var domAlreadyGuessed = document.querySelector("#already-guessed");

document.onkeyup = function play() {
    var guess = event.key.toLowerCase();
    console.log("event: ", event);
    console.log("guess: " + guess);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (randomAlphabet == guess) {
            wins = wins + 1;
            newGame();
            console.log("You Won! Play Again! " + " You have " + guesses + " remaining.");
        } else {
            alreadyGuessed.push(guess)
            domAlreadyGuessed.textContent += guess + " "; 
            console.log("alreadyGuessed: " + alreadyGuessed);
            guesses = guesses - 1;
            console.log("guessesRemain: " + guesses);
            if (guesses == 0) {
                newGame();
                console.log("You Lost, Try Again! " + " You have " + guesses + " remaining.");
            }
        }
    } else {
        console.log("You did not guess a letter from a-z.")
    }
}

function newGame() {
    randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("randomAlphabet: " + randomAlphabet);
    guesses = 9;
    alreadyGuessed = [];
    domAlreadyGuessed.textContent = "Your Guesses so far: ";
}


