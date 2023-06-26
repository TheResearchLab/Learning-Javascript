
//Video 272 - Exporting and Importing modules
/*
//import {addToCart,totalPrice as price,totalQuantity} from './shoppingCart.js';
//console.log(shippingCost) // doesn't work
//addToCart('bread',5); // output coming from add to cart function
//console.log(price,totalQuantity);

//import * as ShoppingCart from './shoppingCart.js'

console.log('Importing module')

//ShoppingCart.addToCart('bread',5);

//import add, {addToCart,totalPrice as price} from './shoppingCart.js'; // can do this but shouldn't
import add, {cart} from './shoppingCart.js' // this makes it easier to import default exports
add('pizza',2);
add('burgers',2);
add('bugatti',4);

console.log(cart)


// Video 273 - Top level await

// console.log('start fetching data')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data) // this code snippet ^^^ will block modules from executing

// console.log('something') // only able to load after the above is complete 

// real world example
const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    //console.log(data.at(-1)) // get the last element of object
    return {title:data.at(-1).title,text:data.at(-1).body}
}

//const lastPost = getLastPost();
// lastPost.then(last=>console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

// Video 274 - The Module Pattern

const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product,quantity) {
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    }

    const orderToCart = function(product,quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    // return stuff to make public
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

shoppingCart2.addToCart('apple',4);
shoppingCart2.addToCart('pizza',6);
console.log(shoppingCart2); // shoppingcart module object?
console.log(shoppingCart2.shippingCost) // undefined because private var

// Video 275 - common js modules

// export is defined in node js not our code or browser
export.addToCart = function(product,quantity) {
    cart.push({product, quantity})
    console.log(
        `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    )
}

// Video 277 - Introduction to NPM

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js' // this is not actually practical, parcel will be used instead
import cloneDeep from 'lodash-es'; // much more practical way


const state = {
    cart: [
        {product:'bread',quantity:5},
        {product:'pizza',quantity:5},
    ],
    user:{loggedIn:true},
}

const stateClone = Object.assign({},state); // creates a clone of state object
const stateDeepClone = cloneDeep(state);
console.log(stateClone)
state.user.loggedIn = false;
console.log(stateClone) // loggedIn also becomes false in this object too

console.log(stateDeepClone) // no issue with changes

// Video 278 - Bundling with Parcel and NPM Scripts

import add, {cart} from './shoppingCart.js' // this makes it easier to import default exports
add('pizza',2);
add('burgers',2);
add('bugatti',4);

console.log(cart)

// refresh url on updates without retriggering page reload
if(module.hot) {
    module.hot.accept();
}
// address the e.preventDefault


// Video 279 - Configuring Babel and Polyfilling

// babel presets will determine which features should be compiled based on browser support

class Person {
    #greeting = 'Hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`)
    }
}

const aaron = new Person('Aaron');

console.log('aaron' ?? null);

console.log(cart.find(el=> el.quantity >=2));
// Promise.resolve('Test').then(x=>console.log(x));

// polyfilling functions
import 'core-js/stable'; // importing everything
// import 'core-js/stable/array/'

// polyfilling async functions
import 'regenerator-runtime/runtime';

*/

// Video 280 - Review writing clean anad modern javascript
