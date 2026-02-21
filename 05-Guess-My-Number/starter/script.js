'use strict';
//Math.random goes from 0 to 19.99 and Math.trunc converts it to 19 so we add 1 to make it 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//Message is simply a placeholder used for text to connect the message class from the html document
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
  document.querySelector('.check').addEventListener('click', function() {
    //Number().. converts string to integer
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
//guess number checks a base case, if empty()..
  if (!guessNumber) {
    displayMessage('Please select a number.. 🥺')
  } else if (guessNumber === secretNumber) {
    displayMessage('You correctly guessed the correct number!😊')
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  if(guessNumber !== secretNumber) {
    if(score > 1) {
      displayMessage(guessNumber > secretNumber ? '⚠️ Score is too high!' : '🔻 Score is too low!')
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      displayMessage('😓 You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
  });
// This is the second event listener using the again button, notice it is in a new code block and all info are appended to the previous .check that defined most classes.
  document.querySelector('.again').addEventListener('click', function(message){
    score  = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';

  })
