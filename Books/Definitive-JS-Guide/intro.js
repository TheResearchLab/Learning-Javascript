function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("world"));

let greetAgain = function(name) {
    return `Hello ${name}!`;
}

console.log(greetAgain("world"));


// Arrow functions

const plus1 = x => x + 1;
const square = x => x*x;

console.log(plus1(4))
console.log(square(4))

// Classes 

class Point {
    constructor(x,y) {
        this.x =  x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(
            this.x * this.x +
            this.y * this.y
        );
    }
}

let p = new Point(1,1);

console.log(p.distance())