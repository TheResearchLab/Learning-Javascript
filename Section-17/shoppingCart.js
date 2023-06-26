// Exporting module
console.log('exporting module');

//Blocking code
// console.log('start fetching users')
// const res = await fetch('https://jsonplaceholder.typicode.com/users')
// const users = await res.json();
// console.log('finished fetching')

const shippingCost = 10; // all top-lvl vars are private in module
export const cart = [];

export const addToCart = function(product,quantity) {
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added to the cart.`)
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice,totalQuantity};

export default function(product,quantity) { // exports this value without namespace?
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added to the cart.`)
}



