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
       if(this.root===null) {
        this.root = newNode;
       } else {
        let currentNode = this.root;
        while(true) {
            if(value < currentNode.value) {
                //Left
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left; // just point at the left node if a value is there 
            } else {
                //Right
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
       }
        
    }
    lookup(value) {
        // check to see if value is valid

        let currentNode = this.root

        // traverse across nodes to find value
        while(currentNode.value !== value) {

            // if the value is greater than the currentNode.value, go right else go left
            if(value > currentNode.left.value) {
                currentNode = currentNode.right; 
            } 
            else if(value < currentNode.left.value) {
                currentNode = currentNode.left;
            } 
            if(currentNode === null) {
                return `no match found`
            }
        console.log(currentNode)
        return currentNode


        }
        // if no value is found then return null

    }
    //remove
 }

 const tree = new BinarySearchTree();
 tree.insert(9);
 tree.insert(20);
 tree.insert(170);
 tree.insert(15);
 tree.insert(1);
 
//  JSON.stringify(traverse(tree.root));


 function traverse(node) {
    const tree = { value: node.value};
    tree.left = node.left === null ? null:traverse(node.left);
    tree.right = node.right === null ? null:traverse(node.right);
    console.log(tree);
    return tree
 }
 
 
 //JSON.stringify(traverse(tree.root))

tree.lookup(9);