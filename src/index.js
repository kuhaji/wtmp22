let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const count = document.querySelector('.count');
const time = document.querySelector('.time');

let guessCount = 1;
let resetButton;

const start = () => {
  startTime = performance.now();
};

const end = () => {
  endTime = performance.now();
  let timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  let seconds = Math.round(timeDiff);
  //console.log(seconds + " seconds");
};


const checkGuess = () => {
  const userGuess = Number(guessField.value);


  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    count.textContent ='spurdo';
    end();
    time.textContent='seconds' + seconds;
    setGameOver();
  } else if (guessCount === 1) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    count.textContent ='spurdo';
    end();
    time.textContent='seconds' + seconds;
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};


guessSubmit.addEventListener('click', () => {
  start();
  checkGuess();

});


const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
};


