 const a = 1;
 const b = 10;
 const c = 100;

 // call stack 
//  console.log('1');
//  console.log('2');
//  console.log('3');
 
 const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
 }

 // recursion 
//  function foo() {
//     foo();
//  }

//  foo();

 console.log('1');
 setTimeout(() => {
    console.log('2');
 }, 2000); // timeout in milliseconds
console.log('3');


// Video 120 Linked List Stack Implementation

class Node {
    constructor(value) {
        first = value;
        next = null;
    }
}

class Stack {
    contructor() {
        this.top = null;
        this.bottom = null;
        this.length =0;
    }
peek() {
    return this.top
}
push(node) {
    // check length
    if(this.length === 0) {
        this.top = node;
        this.bottom = node;
        this.length++;
    } else {
        this.top.next = node;
        this.top = node
    }; 
    return this
}
pop() {
    if(this.length === 0) {
        return this
    } else {
        // remove the top node
        this.top = this.top.next;
    }
}
}

