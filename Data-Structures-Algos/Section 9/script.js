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

//  console.log('1');
//  setTimeout(() => {
//     console.log('2');
//  }, 2000); // timeout in milliseconds
// console.log('3');


// Video 120 Linked List Stack Implementation

class Node {
    constructor(value) {
        this.first = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
peek() {
    return this.top
}
push(value) {
    const newNode = new Node(value);
    
    if(this.length === 0) {
        this.bottom = newNode;
        this.top = newNode;
    } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
    }; 
    
    this.length++;
    return this
}
pop() {
    if(this.length === 0) {
        return null;
    } 
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
    }
}


const myStack = new Stack();
const discord = new Node('discord');
const udemy = new Node('udemy');
const google = new Node('google');



myStack.push('discord');
console.log(myStack.peek());
console.log(myStack.push('udemy'));
console.log(myStack.push('google'));
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());