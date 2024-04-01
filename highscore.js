document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const score = params.get('score');

    if (score) {
      const playerName = localStorage.getItem('playerName');
      document.getElementById('highscorescore').textContent = `${playerName}: ${score}`;
    }
  });