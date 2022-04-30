'use strict';
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '17';
// document.querySelector('.guess').value = 1;
const looseGame = function () {
  score = 0;
  document.querySelector('.check').classList.add('hidden');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = '😥 Yuo lost the game!';
};
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  // Empty Field
  if (!guessNumber)
    document.querySelector('.message').textContent = '⛔ No Number!';
  // Invalid Number or number out of range
  else if (guessNumber < 0 || guessNumber > 100)
    document.querySelector('.message').textContent = '🚫 Invalid Number!';
  else {
    // guess the right number
    if (guessNumber == secretNumber) {
      document.querySelector('.check').classList.add('hidden');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      //update high-score
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
    // guess number is lesser
    else if (guessNumber < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
      } else {
        looseGame();
      }
    }
    // guess number is greater
    else {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
      } else {
        looseGame();
      }
    }
    // update the score
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').classList.remove('hidden');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
