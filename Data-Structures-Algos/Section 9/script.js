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
        this.value = value;
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


// const myStack = new Stack();
// console.log(myStack.peek());
// console.log(myStack.push('discord'));
// console.log(myStack.push('google'));
// console.log(myStack.push('ebay'));
// console.log()

class ArrayStack {
    constructor(){
        this.stack = new Array();
    }
push(value) {
    this.stack.push(value);
    return this.stack;
}
pop() {
    if(this.stack.length === 0) {
        return this;
    } else {
        this.stack.pop();
    }
    return this.stack;
}
peek() {
    return this.stack[this.stack.length-1];
}
}

// const arrStack = new ArrayStack();
// console.log(arrStack.push('google'));
// console.log(arrStack.push('imdb'));
// console.log(arrStack.push('netflix'));
// console.log(arrStack.peek());
// console.log(arrStack.pop());
// console.log(arrStack.pop());

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
enqueue(value) {
   const newNode = new Node(value);
   if(!this.first) {
        this.first = newNode;
        this.last = newNode;
        this.length++;
   } else {
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
   }
   return this
}
dequeue() {
    if(!this.first) return null;
    if(this.first===this.last) {
        this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this
}
}

const myQueue = new Queue();
console.log(myQueue.enqueue('Joy'));
console.log(myQueue.dequeue())
//myQueue.enqueue('Matt');
//myQueue.enqueue('{Pavel');
//console.log(myQueue.enqueue('Samir'));







