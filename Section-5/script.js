'use strict';
/*
// Video 70 - Manipulating the DOM
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊Correct Number'

// Video 73 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10; // grab score element

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/



let secretNum = Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore = 0;

function updateMessage (message) {
    document.querySelector('.message').textContent = message;
}


//document.querySelector('.number').textContent = secretNum; // for testing

document.querySelector('.check').addEventListener('click', function(){
    let numGuess = Number(document.querySelector('.guess').value);
    console.log(numGuess);
    

    // If no input
    if(!numGuess){
        //document.querySelector('.message').textContent = '😉 Enter a Guess!';
        updateMessage('😉 Enter a Guess!');
    }
    // When player wins
    else if(numGuess === secretNum){
        //document.querySelector('.message').textContent = '🎊 Correct Number';
        updateMessage('🎊 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347'; 
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNum;
        if(highscore<score) {
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // Else if too high/low
    else if (numGuess !== secretNum) {
        if(score>1){
            /*document.querySelector('.message').textContent = numGuess > secretNum ?  '☝️ too high!':
            '👇 too low';*/
            updateMessage(numGuess > secretNum ?  '☝️ too high!':
            '👇 too low');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🤬 you lose';
            document.querySelector('body').style.backgroundColor = '#ff0000'; 
            document.querySelector('.score').textContent = '0';
        }   
    }
    
    
    /*// Guess too high
    else if(numGuess > secretNum)  {
        if(score>1){
            document.querySelector('.message').textContent = numGuess >  '☝️ too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🤬 you lose';
            document.querySelector('body').style.backgroundColor = '#ff0000'; 
            document.querySelector('.score').textContent = '0';
        }   

    }
    // Guess is too low
    else if(numGuess<secretNum){
        if(score>1){
            document.querySelector('.message').textContent = '👇 too low'
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🤬 you lose';
            document.querySelector('body').style.backgroundColor = '#ff0000'; 
            document.querySelector('.score').textContent = '0';
        }
    }*/
})

document.querySelector('.again').addEventListener('click',function(){
    // Change score
    score = 20;
    document.querySelector('.score').textContent = score;

    // Change Secret Number
    secretNum = Math.trunc(Math.random() * 20)+1;
    
    // Reset page presentation
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = 'Start guessing...';


})