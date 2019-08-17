
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("randomAlphabet: " + randomAlphabet);


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemain = 0;


document.onkeyup = function play() {
    var guess = event.key.toLowerCase();
    console.log("guess: " + guess);
    if (randomAlphabet == guess) {
        wins = wins + 1;
        console.log("You Won!")
    } else {
        guesses = guesses - 1;
        guessesRemain = guesses;
        console.log("guessesRemain: " + guessesRemain);
        if (guessesRemain == 0) {
            console.log("Game Over");
        }
    }
}


