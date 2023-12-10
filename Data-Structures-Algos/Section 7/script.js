 let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhh');
    }
 }

 user.age;
 user.spell = 'abra kadabra';
console.log(user);
user.scream(); 

// Video 81 Hash tables in different languages

const a = new Map(); // keeps order of insertion
const b = new Set(); // only stores keys (no values)

// Video 82 Hash table implementation 

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
        let address = this._hash(key) 
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data
    }

    get(key) {
        let address = this._hash(key) 
        return this.data[address][0][1];
    }
  }
  
const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes',2));
console.log(myHashTable.get('grapes'));

console.log(myHashTable.set('candy','hersheys'));
console.log(myHashTable.get('candy'));
