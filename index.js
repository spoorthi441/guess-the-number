let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
  });
}

function validateguess(guess){
  if(isNaN(guess)){
    alert("Please enter the valid number");
  }else if(guess < 1){
    alert("Please enter number above 1");
  }else if(guess > 100){
    alert('Please eneter number below 100');
  }else{
    prevGuess.push(guess);
    if(numGuess == 11){
      displayguess(guess);
      displaymessage(`Game over. Random number was ${randomNumber}`);
      endgame();
    }else{
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess){
   if(guess === randomNumber){
    displaymessage('You guessed it right');
    endgame();
  } else if(guess < randomNumber){
    displaymessage('Number is too Low');
  }else if(guess > randomNumber){
    displaymessage('Number is too High');
  }
}

function displayguess(guess){
  userInput.value='';
  guessSlot.innerHTML += `${guess},   `;
  numGuess ++;
  remaining.innerHTML = `${11 - numGuess}`;

}

function displaymessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endgame(){
  userInput.value='';
  userInput.setAttribute('disable','');
  p.classList.add('button');
  p.innerHTML= '<h1 id="newGame">Start new game</h1>';
  startOver.appendChild(p);
  playGame = false;
  newgame();
}

function newgame(){
  const newgameButton= document.querySelector("#newGame");
  newgameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    numGuess = 1;
    lowOrHi.innerHTML ='';
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });

}


