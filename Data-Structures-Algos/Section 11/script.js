 //edge list
 const edgeGraph = [[0,2],[2,3],[2,1],[1,3]];

 //Adjacent list 
 const adjGraph = [[2],[2,3],[3,4],[12,5]] // node values are the index values themselves

// Adjacent Matrix 
const graph = [
    [0,1,1,0],
    [1,1,0,0],
    [0,0,0,1],
    [1,0,0,0]
]

// Implementing Graph with Adjacency list



class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = new Array(0);
        this.numberOfNodes++;
        return this;
    }
    addEdge(node1,node2) {
        if(!this.adjacentList[node1] || !this.adjacentList[node2]) {
            return `you entered a non-valid node`
        } 
        
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this

    }
    showCollections() {   
    }
}

const myGraph = new Graph();
console.log(myGraph.addVertex(6));
console.log(myGraph.addVertex(12));
console.log(myGraph.addEdge(4,12));

