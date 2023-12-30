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

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length =1;
    }
    append(value) {
        //  create new node
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail 
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array
    } 

    traverseToIndex(index,currentNode) {
        let i = 0;
        while(i < index-1) {
            currentNode = currentNode.next;
            i++;  
        }
        return currentNode;
    }

    insert(index,value) {
        let currentNode = this.head;
        let newNode = new Node(value);
       
        if(index>=this.length) {
            this.append(value);
            return this.printList();
        }
        // handle the case were index equals 0
        if(index===0) {
            this.prepend(value);
            return this.printList();
        }

        // find value at index location
        currentNode = this.traverseToIndex(index,currentNode);
        newNode.next = currentNode.next 
        newNode.prev = currentNode;
        currentNode.next = newNode;
        this.length++;

        return this.printList();
       
    }

    remove(index) {
        // if this index doesn't exist return a warning
        if(index > this.length-1) {
            return console.log(`Please enter a valid index. Max index = ${this.length}`);
        }
        // traverse to the index position and grab value
        let currentNode = this.traverseToIndex(index,this.head);
        
         // if this is the first node then reset head to second to next value
        if(index===0) {
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }
       
        // if this is the last node then just reset tail to the value before last index
        if(currentNode.next === this.tail) {
            currentNode.next = null;
            this.tail = currentNode;
            this.length--;
            return this.printList()
        }
       
        // else rearrange the values around the index being removed
        currentNode.next = currentNode.next.next;
        //currentNode.prev = currentNode.prev.prev;
        this.length--;
        return this.printList();
        
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(6);
myLinkedList.append(15);
myLinkedList.prepend(1);
myLinkedList.prepend(5);
myLinkedList.insert(3,100);
myLinkedList.insert(2,45);
// console.log(myLinkedList);
// myLinkedList.prepend(1);
// myLinkedList.prepend(24);
// console.log(myLinkedList);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.insert(3,100));
console.log(myLinkedList.printList())
console.log(myLinkedList.remove(0));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(1));
console.log(myLinkedList.remove(1));

