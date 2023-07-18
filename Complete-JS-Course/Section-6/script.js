'use strict';

// Get elements as variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// Remove hidden class from element (Open Modal)
function removeHiddenClass(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


// Add hidden class to element (Close Modal)
function addHiddenClass(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


// Add listener to button
function mainBtnListener(i){
    btnsShowModal[i].addEventListener('click',removeHiddenClass)
}

// Close modal and window
btnCloseModal.addEventListener('click',addHiddenClass);
overlay.addEventListener('click',addHiddenClass);

// Create open buttons
for (let i=0;i<btnsShowModal.length;i++){
    mainBtnListener(i);
}

// Detect when Escape has been pressed while modal is open
document.addEventListener('keydown',function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){

        addHiddenClass();
    }
    
})

