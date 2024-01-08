// Video 129
// function BinaryTreeNode(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }

// video 130 
// level 1: 2^0 = 1; 
// level 2: 2^1 = 2; 
// level 3: 2^2 = 4; 
// level 4: 2^3 = 8;

// # of nodes = 2^h - 1
// log nodes = steps 


 class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
 }

 class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        if(!currentNode.left & !currentNode.right) { // if these are both null
            currentNode.left = newNode;
            return this;
        } else {
            // if current node's child on the left
            if(currentNode.left.value > newNode.value) { // what happens when equal?
                currentNode.right = currentNode.left;
                currentNode.left = newNode;
                return this
            }
            if(currentNode.left.value < newNode.value) { // what happens when equal? or still has missing pair?
                currentNode.right = newNode;
                return this
            }
        }
    }
    // lookup(value) {

    // }
    //remove
 }

 const tree = new BinarySearchTree();
 console.log(tree.insert(9));
 console.log(tree.insert(4));
 console.log(tree.insert(6));

 
 
 //JSON.stringify(traverse(tree.root))