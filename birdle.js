const birdName = "tucan"; // Change this to the name of the bird
let attempts = 0;

function checkGuess() {
  const guess = document.getElementById("guessInput").value.toLowerCase();
  attempts++;

  if (guess === birdName) {
    const playerName = prompt("Congratulations! You guessed the bird's name! Enter your name for the high score list:");
    if (playerName) {
        localStorage.setItem('highScore', attempts);
        localStorage.setItem('playerName', playerName);
      // Save playerName and attempts to localStorage or send to server for high scores list
      alert(`Thank you, ${playerName}, for playing Birdle! You took ${attempts} attempts.`);
      window.location.href = "HighScores.html"; // Redirect to high scores page
    }
  } else {
    alert("Incorrect guess. Try again!");
  }
}

