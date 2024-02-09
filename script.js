'use strict';

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  if (guess === '') {
    displayContent('.message', '⛔ Not a number');
    return;
  }

  const guessNumber = Number(guess);

  if (guessNumber === secretNumber) {
    displayContent('.message', '🥳 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayContent('.highscore', highScore);
    }
  } else if (guessNumber != secretNumber) {
    if (score > 1) {
      displayContent(
        '.message',
        guessNumber > secretNumber ? '📈 To high' : '📉 To Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.message').textContent = '💥 You loose';
      displayContent('.message', '💥 You loose');
      displayContent('.score', score);
    }
  }
});

// Play again functionality
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayContent('.message', 'Start guessing...');
  score = 20;
  displayContent('.score', score);
  secretNumber = generateSecretNumber();
  document.querySelector('.guess').value = '';
});

// Displaying custom message to html based on class name
function displayContent(className, message) {
  document.querySelector(className).textContent = message;
}

function generateSecretNumber() {
  return Math.floor(Math.random() * 20) + 1;
}
