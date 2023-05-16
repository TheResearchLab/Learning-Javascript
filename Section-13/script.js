'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


const openModal = function (evt) {
  evt.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal);


for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click',function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); 
  //console.log(e.target.getBoundingClientRect()) // coordinates for evt? button 

  console.log('Current Scroll',window.pageXOffset,window.pageYOffset)
  console.log('height/width viewport', 
               document.documentElement.clientHeight,
               document.documentElement.clientWidth);

  // scrolling
  section1.scrollIntoView({behavior: 'smooth'}) 
  });


/////////////////////////////////////////////////////
// Page navigation - event delegation

// document.querySelectorAll('.nav__link').forEach
// (function(el) {
//   el.addEventListener('click',function(evt) {
//     evt.preventDefault() // prevents default behavior of scrolling to anchor
//     const id = this.getAttribute('href');
//     //console.log(el.getAttribute(id));

//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// })

// 1. Add event listener to common parent element
document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();
  // 2. determine origin of event
    console.log(e.target);

  // 3. Matching Strategy
  if(e.target.classList.contains('nav__link')) { // if this was the element that was clicked?
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});




// AGAIN THIS IS BAD! NEED EVENT DELEGATION
// tabs.forEach(t=>t.addEventListener('click',()=>
// console.log('Tab')));

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab'); // helps unify the behavior of two elements
  //console.log(clicked);

  // Guard clause - if nothing is clicked then leave this function
  if(!clicked) return; 
  
  //Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active content area
  const id = clicked.dataset.tab;
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${id}`).classList.add('operations__content--active');

})


// Menu fade animation
function tabsHoverEffect(e) {
  if(e.target.classList.contains('nav__link')) { // don't need closest here because no children
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link') // returns a node list
    //console.log(siblings);
    const logo = link.closest('.nav').querySelector('img')  // selecting by image tab
    //console.log(logo);

    // Hide the siblings when hovering
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this
    })
    logo.style.opacity = this 
  }
}

nav.addEventListener('mouseover',tabsHoverEffect.bind(0.5)); //bind returns a new function

nav.addEventListener('mouseout',tabsHoverEffect.bind(1)); //Checkout MDN on type of events

// // Sticky Navigation

// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords);

// // This is bad, especially for mobile
// window.addEventListener('scroll', function(e) {
//   //console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
  
// })

/////////////////////////////////////////////////////////////
 // Sticky navigation: Intersection Observer API (Video 197)

// const observerCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const observerOptions = {
//   root: null, // if null then target intersect viewport
//   threshold: [0.1,0.2]
// };


// const observer =  new IntersectionObserver(observerCallback,observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header')
const navHeight = -nav.getBoundingClientRect().height + 'px'; // this number is negative to have the header occur before target
console.log(navHeight);

const stickyNav = function(entries) {
  const [entry] = entries;

  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}


const headerObserver = new IntersectionObserver(stickyNav,{root: null, threshold: 0, rootMargin: navHeight});
headerObserver.observe(header)

/////////////////////////////////////////////////////////////
 // Reveal sections

 const allSections = document.querySelectorAll('.section')
 //console.log(allSections);

const revealSection = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target) // unobserving sections
}

 const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
 })
 allSections.forEach(function(section) {
  //section.classList.add('section--hidden');
  sectionObserver.observe(section); // observing sections
 })


 /////////////////////////////////////////////////////////////
 // Lazy Loading Images

 const featuresImgs = document.querySelectorAll('img[data-src]')

 const revealImg = function(entries,observer) {
  const [entry] = entries

  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src; // switch low quality image for better
  
  // remove blur from image
  entry.target.addEventListener('load', function() { // ensures the blur doesn't come off image before the image is viewable
    entry.target.classList.remove('lazy-img');
    //console.log('finished loading');
  })
  //console.log('...loading img');
  observer.unobserve(entry.target)
  //console.log('unobserved');

}

 const imgObserver = new IntersectionObserver(revealImg,{root:null,threshold:0.30,rootMargin:'150px'}) // root margin to begin load before threshold is reached

featuresImgs.forEach(function(img){
  imgObserver.observe(img);
})

 /////////////////////////////////////////////////////////////
 // Slider
const slider = function() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')


  let curSlide = 0;
  const maxSlide = slides.length;


  // Slider related functions 
  const createDots = function() {
    slides.forEach((_,i) => {
      dotContainer.insertAdjacentHTML('beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }


  const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }



  // 0% 100% 200% 300%
  const goToSlide = function(slide) {
    slides.forEach((s,i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
  }




  const nextSlide = function() {
    if(curSlide === maxSlide-1){
      curSlide = 0;
    } else {
        curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const prevSlide = function() {
    if(curSlide === 0){
      curSlide = maxSlide-1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const init = function(){
    goToSlide(0);
    createDots();
    activateDot(0);
  }
  init()

  // Go to the next slide (Event handlers)
  btnRight.addEventListener('click',nextSlide)
  btnLeft.addEventListener('click',prevSlide)


  // add listener on the whole document for a dpad entry
  document.addEventListener('keydown', function(e) {
    if(e.code==='ArrowRight') {
      nextSlide();
    } else if (e.code==='ArrowLeft') {
      prevSlide();
    } else {
      return;
    }

  });



  // add dot functionality using delegation
  dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dots__dot')) {
      const {slide} = e.target.dataset;
      goToSlide(slide); 
      activateDot(slide);
    }
  })
};
slider();

/////////////////////////////////////////////////////
//  Lessons

/*
// Video 186 - Creating, Selecting, Deleting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('#section-1');
document.getElementsByTagName('button'); // get all button and returns an html collection


console.log(document.getElementsByClassName('btn')); // no dot is needed

// Creating and inserting elements
// .insertAdjacentHTML 

// create an element a
const message = document.createElement('div'); // returns dom element not on page yet
message.classList.add('cookie-message'); // we can add this because it is an object representing a dom elemnt
//message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// append and prepend
header.prepend(message) // adds the element as the first child 
header.append(message) // moves the cookie message to the bottom of the element's list - can't be in 2 places at once
//header.append(message.cloneNode(true)); // clones the element

// before and after
//header.before(message) // moves the message element before the header element
header.after(message) // moves the message after the header element

// remove the message object
document.querySelector('.btn--close-cookie').
addEventListener('click',function(){
  //message.remove(); // this is the new wave
  message.parentElement.removeChild(message); // this was the old wave
})


// Video 187 - Style, Attributes, Classes

// Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

console.log(message.style.height); // does not work because we did not set inline manually
console.log(message.style.backgroundColor); // this does return because we created

// We can get styles if we really want
console.log(getComputedStyle(message).height); // get computed style
console.log(getComputedStyle(message).color);

console.log((Number.parseFloat(getComputedStyle(message).height) + 40).toFixed(3) + 'px');
message.style.height = (Number.parseFloat(getComputedStyle(message).height) + 40).toFixed(3) + 'px' //get computed returns a string 

// Working with CSS Custom properties aka variables
document.documentElement.style.setProperty('--color-primary','orangered'); // can easily set the style of page.


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // looks different
console.log(logo.className);

// Non-standard
console.log(logo.designer); // undefined because it is not standard
console.log(logo.getAttribute('designer')); // this will however read the attribute value

logo.alt = 'Beautiful minialist logo' // modify existing element attributes
logo.setAttribute('company','Bankist') //create a new attribute on element


console.log(logo.src); // real link
console.log(logo.getAttribute('src')); // as seen in html ie. relative link

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // real link
console.log(link.getAttribute('href')); // as seen in html

// Data Attributes
console.log(logo.dataset.versionNumber); // had to turn to camel-case


// Classes
logo.classList.add('c','a')
logo.classList.remove('c','a')
logo.classList.toggle('c')
logo.classList.contains('c')

// Don't use
logo.className = 'aaron'


// Video 188 - Implementing Smooth Scrolling (2 ways)
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); 
  //console.log(e.target.getBoundingClientRect()) // coordinates for evt? button 

  console.log('Current Scroll',window.pageXOffset,window.pageYOffset)
  console.log('height/width viewport', 
               document.documentElement.clientHeight,
               document.documentElement.clientWidth);

  // scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, 
  //                 s1coords.top + window.pageYOffset);// adding the yoffset represents the top of the page again
  
  // //smoother
  // window.scrollTo({
  //   left:s1coords.left + window.pageXOffset, 
  //   top:s1coords.top + window.pageYOffset,
  //   behavior:'smooth'
  //   });

  // New School way
  section1.scrollIntoView({behavior: 'smooth'}) // this only works in modern browsers lol
  })


//Video 189 - Types of events and event handlers
const h1 = document.querySelector('h1');

const alertH1 = function(e){
  console.log('Boo. Did I scare you?')
};

// Mouse enter event - the more adventageous event handler
h1.addEventListener('mouseenter',alertH1)

setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000)

// h1.onmouseenter = function(e){
//   console.log('Boo. Did I scare you?')
// } // this is old school way of listening to events


// Video 190 - Event propagation Bubbling and Capturing

// rgb(255,255,255)
const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1)+min);

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
console.log(randomColor())


document.querySelector('.nav__link').addEventListener('click',function(e) {
  this.style.backgroundColor = randomColor()
  console.log(e.target,e.currentTarget);

  // stop propogation
  e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click',function(e) {
  this.style.backgroundColor = randomColor()
  console.log(e.target,e.currentTarget);
})

document.querySelector('.nav').addEventListener('click',function(e) {
  this.style.backgroundColor = randomColor()
  console.log(e.target,e.currentTarget);
},false); // false is default. event handler will no longer listen bubbling events but capturing events? 3rd param set to true
// this changes the order of when the event is listening. Other event handlers listen on the way up but this listen on initial way down


// Video 193 - DOM Traversing

const h1 = document.querySelector('h1')

// Going downwards: child
console.log(h1.querySelectorAll('.highlight')); // returns nodelist
console.log(h1.childNodes); // all h1 children
console.log(h1.children); //returns html collection and only works for direct children
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orangered'


// Going updwards
console.log(h1.parentNode); // returns header title
console.log(h1.parentElement); // returns the same in this case

// Find closest parent
h1.closest('.header').style.background = 'var(--gradient-secondary)' // receivers query string like query selector
h1.closest('h1').style.background = 'var(--gradient-primary)' // can call self if self is closest

// Going sideways: siblings
console.log(h1.previousElementSibling); // working with elements for the most part
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);// same for nodes
console.log(h1.nextSibling); // same for nodes

console.log(h1.parentElement.children); // get the parent to get all the children of parent (this is a collection)
[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = 'scale(0.5)';
});
*/

// Video 194 - Tabbed Component


// Video 202 Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML parsed and DOM tree built',e);
})

window.addEventListener('load', function(e) {
  console.log('Page fully loaded',e);
})

// Do not abuse this power
// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// })