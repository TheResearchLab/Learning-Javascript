// 0 1 1 2 3 5 8

// Recursion Algo
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Bubble Sort
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let minValueIndex = i; // Store the index of the minimum value
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minValueIndex]) {
                minValueIndex = j; // Update the index of the minimum value
            }
        }
        // Swap elements if necessary
        if (minValueIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minValueIndex];
            arr[minValueIndex] = temp;
        }
    }
    return arr;
}


function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

function linearSearch(arr, target) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is equal to the target, return its index
      if (arr[i] === target) {
        return i;
      }
    }
    // If the target is not found, return -1
    return -1;
  }



  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found, return its index
      } else if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Target not found
  }


  function bfs(graph, start) {
    const visited = new Set(); // To keep track of visited vertices
    const queue = [start]; // Initialize the queue with the starting vertex
    const result = []; // To store the traversal order
  
    visited.add(start); // Mark the starting vertex as visited
  
    while (queue.length > 0) {
      const currentVertex = queue.shift(); // Dequeue the current vertex
      result.push(currentVertex); // Add the current vertex to the result
  
      // Visit all neighboring vertices of the current vertex
      for (const neighbor of graph[currentVertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // Mark neighbor as visited
          queue.push(neighbor); // Enqueue the neighbor
        }
      }
    }
  
    return result;
  }
  
 
  function dfs(adjList, startNode) {
    const visited = new Set(); // To keep track of visited vertices
    const stack = [startNode]; // Initialize the stack with the starting vertex
    const result = []; // To store the traversal order
  
    visited.add(startNode); // Mark the starting vertex as visited
  
    while (stack.length > 0) {
      const currentVertex = stack.pop(); // Pop the current vertex from the stack
      result.push(currentVertex); // Add the current vertex to the result
  
      // Visit all neighboring vertices of the current vertex
      for (const neighbor of adjList[currentVertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // Mark neighbor as visited
          stack.push(neighbor); // Push the neighbor onto the stack
        }
      }
    }
  
    return result;
  }
  

  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Inorder Traversal
  function inorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  
    traverse(root);
    return result;
  }
  
  // Preorder Traversal
  function preorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
      if (node === null) return;
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
  
    traverse(root);
    return result;
  }
  
  // Postorder Traversal
  function postorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }
  
    traverse(root);
    return result;
  }
  
  // Example Usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log("Inorder traversal:", inorderTraversal(root));
  console.log("Preorder traversal:", preorderTraversal(root));
  console.log("Postorder traversal:", postorderTraversal(root));
  
  