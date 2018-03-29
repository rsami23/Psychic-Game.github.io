
// Create an array that lists out all of the letter options.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold scores
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var guessesFar = [];
var userGuess = null;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed. User Guess 
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    // Wins: (# of times the user has guessed the letter correctly)
    if ((computerGuess === userGuess)) {
        wins++
        console.log("You win!");
    }

    // Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
    else if ((computerGuess !== userGuess)) {
        console.log("You lose!");
    }

    // Guesses Left: (# of guesses left. This will update)
    // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
    if (guessesLeft == 0) {
        loses++
        console.log("You lose!");
        guessesLeft = 9;
		guessesFar = [];
		computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
    if (guessesFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesFar[guessesFar.length]=userGuess;
		guessesLeft--;
	}

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
    "<p> Wins: " + wins + "</p>" +
    "<p> Loses: " + loses + "</p>" +
    "<p> Your Guesses so Far: " + guessesFar + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>";
    
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
 
};
    
    

   

