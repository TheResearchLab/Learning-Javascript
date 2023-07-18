'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initialize state variables
let scores, currentScore, playing, activePlayer;

// New Game Logic
const init = function() {
    document.querySelector('.dice').classList.add('hidden');
    scores = [0,0];
    currentScore = 0;
    playing = true;
    activePlayer = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    
}

// initialize game on start
init();


// Switch players
function switchPlayer(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    
}

// Role Dice
btnRoll.addEventListener('click',function(){
    if(playing){
        let diceRoll = Math.trunc(Math.random()*6) + 1;
        console.log(diceRoll);
        // Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${diceRoll}.png`

    
    // Check for a role 1
    if (diceRoll !== 1){
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
    } else {
        console.log('Game Over. Restart!');
    }
   
})

// Hold score
btnHold.addEventListener('click',function(){
    if(playing){
        if (scores[activePlayer]+currentScore < 50){
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
            switchPlayer();
        } else {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
            console.log('Game Over!')
        }
         
    } else {
        console.log('Game Over. Restart!');
    }
})

// Reset/Start New Game
btnNew.addEventListener('click',init);