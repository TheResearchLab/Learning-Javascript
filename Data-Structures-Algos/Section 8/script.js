// const basket = ['apples','grapes','pears']

// // Pointer
// let obj1 = {a:true};
// let obj2 = obj1;
// obj1.a = 'hello'
// delete obj1 // won't delete on object 2 because it's still using the value at the location
// //console.log(obj1===obj2);
// //console.log(obj1);
// obj2 = 'hello';
// console.log(obj2);

// Video 98 - Append List

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length =1;
    }
    append(value) {
       //  
    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);