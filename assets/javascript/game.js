
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("randomAlphabet: " + randomAlphabet);


var wins = 0;
var losses = 0;
var guesses = 9;


document.onkeyup = function play() {
    var guess = event.key.toLowerCase();
    console.log("guess: " + guess);
    if (randomAlphabet == guess) {
        wins = wins + 1;
        newGame();
        console.log("You Won! Play Again! " + " You have " + guesses + " remaining.");
    } else {
        guesses = guesses - 1;
        console.log("guessesRemain: " + guesses);
        if (guesses == 0) {
            newGame();
            console.log("You Lost, Try Again! " + " You have " + guesses + " remaining.");
        }
    }
}

function newGame() {
    randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("randomAlphabet: " + randomAlphabet);
    guesses = 9;
}


