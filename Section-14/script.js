'use strict';
/*
// Video 208 - Constructor Functions and the new operator

const Person = function(firstName,birthYear) {
    // console.log(this); // should be the empty object
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method in the constructor - Will use prototypal inheritance instead
    // this.calcAge = function() {
    //     console.log(2037-this.birthYear);
    // } 
}


const aaron = new Person('Aaron',1996);


//////// All happens because we are calling the new
// 1. New {} is create
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda',2017);
const jack = new Person('Jack', 1975);

console.log([aaron, matilda, jack]);

console.log(aaron instanceof Person);
//console.log(aaron.calcAge());


// Video 209 - Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
} // prototype property of constructor function

aaron.calcAge();
matilda.calcAge();


console.log(aaron.__proto__);

console.log(aaron.__proto__ === Person.prototype); // this is true
console.log(Person.prototype.isPrototypeOf(aaron)); // person.prototype is the prototype of aaron and not person

console.log(aaron);


// add property from prototype
Person.prototype.species = 'Homo Sapiens';
console.log(aaron.species,matilda.species);

console.log(aaron.hasOwnProperty('firstName')); // has own property because the object owns property
console.log(aaron.hasOwnProperty('species')); // false because prototype owns the property

// Video 211 - prototypal inheritance built-in objects

console.log(aaron.__proto__);
console.log(aaron.__proto__.__proto__.__proto__); // returns null

console.log(Person.prototype.constructor); // returns the person


const arr = [3,4,4,5,6,9,3] // arr object inherits methods from prototype
console.log(arr.__proto__)

// Give arrays new methods - this is actually insane
Array.prototype.unique = function() { // this is not a good idea
    return[...new Set(this)]
}

console.log(arr.unique());



const h1 = document.querySelector('h1');

console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // this returns the generic object
console.dir(x => x++); 

// Coding Challenge #1

const Car = function(make,speed) {
    this.make = make;
    this.speed = speed;
}

const volvo = new Car('volvo',60);
const bmw = new Car('bmw',120)
console.log(Car.__proto__)

Car.prototype.accelerate = function() {
    this.speed+=10
    console.log(`Going ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    if(this.speed - 5 < 0) return;
    this.speed-=5
    console.log(`Slowing down... now driving at ${this.speed} km/h`);
}



for (let i=0;i<9;i++){
    volvo.accelerate();
}

for (let i=0;i<29;i++){
    bmw.brake();
}



// Video 213 - ES6 Classes... syntactic sugar

// class expression
// const PersonCl = class {}


//Class decleration
class PersonCl {
    constructor(fullName,birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear); // this is the prototypal method
    }

    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else console.log('The given name is not a full name');
    }

    get fullName() { // without this we got a conflict error
        return this._fullName;
    }
}

const jackie = new PersonCl('Jackie Fierce',1996);
jackie.calcAge()
console.log(jackie.__proto__===PersonCl.prototype) ;

PersonCl.prototype.greet =  function() {
    console.log(`Hey ${this.fullName}`);
}

jackie.greet();


// 1. Classes are NOT hoisted... can't call them before they are declared
// 2. Classes are first-class citizens meaning we can pass them into functions are return from functions
// 3. Body of a class are always executed in strict mode.


// Video 214 - Setters and Getters

const account = {
    owner:'aaron',
    movements: [200,-55,680,68,55,2300],

    get latest() {
        return this.movements.slice(-1)[0];
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}

console.log(account.latest)
account.latest = 50
console.log(account.movements);



// Video 215 - Static Methods

const Person = function(firstName,birthYear) {
    // console.log(this); // should be the empty object
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method in the constructor - Will use prototypal inheritance instead
    // this.calcAge = function() {
    //     console.log(2037-this.birthYear);
    // } 

}

Person.hey = function() { // instance method
    console.log(`Hey there 👋`);
}

Person.hey();

//const aaron = new Person('aaron',1996)
//aaron.hey() // this won't work it's not inherited

class PersonCl {
    constructor(fullName,birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // static method
    static hey() {
        console.log(`Hey there 👋`);
    }



}


const aaron = new PersonCl('aaron',1996)
PersonCl.hey(); // this is a function on the class namespace.

// Video 216 - Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven =Object.create(PersonProto) // this links the steven object to the person proto
console.log(steven);

steven.name = 'Steven'
steven.birthYear = 2002;

steven.calcAge();
console.log(steven.__proto__);

// Create another object and set properties programatically
const sarah = Object.create(PersonProto);

sarah.init('Sarah','1979');
sarah.calcAge();


// Video 217 - Coding Challenge #2

class CarCl {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }

    hey() {
        console.log(`Hey there 👋`);
    }

    accelerate() {
        this.speed+=10;
        console.log(`Going ${this.speed} km/h`);
    }
    
    brake() {
        if(this.speed - 5 < 0) return;
        this.speed-=5;
        console.log(`Slowing down... now driving at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed /1.6;
    }

    set speedUS(curSpeed) {
        this.speed = curSpeed * 1.6;
    }
}

const mustang = new CarCl('ford',120);
console.log(mustang);
mustang.brake();
mustang.accelerate();
mustang.speedUS = 40 // set speed to 40mph
console.log(mustang.speedUS) // get speed in km/h


const Person = function(firstName,birthYear) {
    // console.log(this); // should be the empty object
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const Student = function(firstName,birthYear,course) {
    Person.call(this, firstName, birthYear); // need the call method to set the this keyword
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype) // need this to link and not replace the Student prototype to the person prototype

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I am a ${this.course} student.`)
}

const mike =  new Student('Mike',2020,'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // console.dir


// These are the same as above???
console.log(mike instanceof Student);
console.log(mike instanceof Person); 
console.log(mike instanceof Object);

// Video 219 Coding Challenege #3

const Car = function(make,speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed+=10
    console.log(`Going ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    if(this.speed - 5 < 0) return;
    this.speed-=5
    console.log(`Slowing down... now driving at ${this.speed} km/h`);
}


const EV = function(make,speed,charge) {
    Car.call(this,make,speed);
    this.charge = charge;
}

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
    this.speed+=20;
    this.charge-=.01;
    console.log(`tesla going ${this.speed} km/h, with a charge of ${this.charge}`);
}

const volvo = new Car('volvo',60);
const bmw = new Car('bmw',120)
const tesla = new EV('tesla',70,.75)
console.log(tesla)
tesla.chargeBattery(.90)
console.log(tesla)

// Polymorphism
tesla.accelerate(); 
bmw.accelerate();

// Video 120 - Inheritance Between "Classes" ES6 Classes

class PersonCl {
    constructor(fullName,birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear); // this is the prototypal method
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age(){
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else console.log('The given name is not a full name');
    }

    get fullName() { // without this we got a conflict error
        return this._fullName;
    }

    static hey(){
        console.log('Hey there 👋');
    }
}

class StudentCl extends PersonCl{
    constructor(fullName,birthYear,course) {
        //always needs to happen first... this lets you access the this keyword 
        super(fullName,birthYear) // super is the constructor function of the parent class
        this.course = course
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I am a ${this.course} student.`)
    }

    calcAge() {
        console.log(`I'm ${2037 -this.birthYear} years old, but as a student I feel like I am ${2037-this.birthYear + 10}.`);
    }
}

const martha = new StudentCl('Martha Jones',2016,'Computer Science')
martha.introduce();
martha.calcAge();
console.log(martha.__proto__);

// Video 221 - Inheritance between classes : Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName,birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

// create student init function - leveraging the person proto parent relationship
StudentProto.init = function(firstName,birthYear,course) {
    PersonProto.init.call(this,firstName,birthYear); 
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`Hello my name is ${this.firstName}, I am ${2037 - this.birthYear} years old and I am a ${this.course} student.`);    
}

const jay = Object.create(StudentProto);

jay.init('jay',2018,'computer science');
jay.introduce();
jay.calcAge();

// Video 222 - Another Class Example

class Account{
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;


        console.log(`Thanks for opening an account ${this.owner}`);
    }

    deposit(val) {
        this.movements.push(val);
    }

    withdraw(val) {
        this.movements.push(-Number(val));
    }

    approveLoan(val) { // user should not be able to call this. Should be encapsulated
        return true;
    }

    requestLoan(val) {
        if(this.approveLoan(val)) {
            this.deposit(val);
            console.log('Loan Approved');
        }
    }

}

const acc1 = new Account('Aaron','USD','9999');
console.log(acc1);

acc1.deposit(2000);
acc1.withdraw(300);
acc1.requestLoan(1000);

console.log(acc1);

// Video 223 - Encapsulation and data privacy

class Account{
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this._movements = []; // added underscore to make a protected property
        this.locale = navigator.language;


        console.log(`Thanks for opening an account ${this.owner}`);
    }

    // Public method for getting movements
    getMovements() {
        return this._movements
    }
    
    
    
    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this._movements.push(-Number(val));
    }

    _approveLoan(val) { // user should not be able to call this. Should be encapsulated
        return true;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan Approved');
        }
    }

}

const acc1 = new Account('Aaron','USD','9999');
console.log(acc1);

acc1.deposit(2000);
acc1.withdraw(300);
acc1.requestLoan(1000);

console.log(acc1);

console.log(acc1.getMovements());

// Video 224 - Encapsulation: Private Class Fields and Methods (Wasn't apart of the language at time of course)

// Public fields
// Private fields
// Public methods
// Private methods
// (there is also a static method)





class Account{
    // 1) public fields
    locale = navigator.language; // needs semi-colon to work
    
    // 2) private fields
    #movements = [];
    #pin; //set field to undefined
    
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this._movements = []; // added underscore to make a protected property
        // this.locale = navigator.language;


        console.log(`Thanks for opening an account ${this.owner}`);
    }

    // 3) Public method for getting movements
    getMovements() {
        return this.#movements
    }
    
    deposit(val) {
        this.#movements.push(val);
        return this
    }

    withdraw(val) {
        this.#movements.push(-Number(val));
        return this
    }

    requestLoan(val) {
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log('Loan Approved');
            return this
        }
    }

    // 4) private methods
    #approveLoan(val) { // user should not be able to call this. Should be encapsulated
        return true;
    }

    // 5) static methods
    static helper() {
        console.log('get help on class');
    }

}

const acc1 = new Account('Aaron','USD','9999');
console.log(acc1);

acc1.deposit(2000);
acc1.withdraw(300);
acc1.requestLoan(1000);

console.log(acc1);

console.log(acc1.getMovements());
// console.log(acc1.#movements); // this causes error
// console.log(acc1.#pin); // also causes errors

//console.log(acc1.#approveLoan(1000)); // private method did not work at time of recording in browser but works now

Account.helper();

// Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35)
console.log(acc1);
*/


// Video 227 - Coding Challenge #4

class Car {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed+=10;
        console.log(`Going ${this.speed} km/h`);
    }

    brake() {
        if(this.speed - 5 < 0) return;
        this.speed-=5;
        console.log(`Slowing down... now driving at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const challenger = new Car('dodge',100);
console.log(challenger);
challenger.accelerate();
console.log(challenger);
challenger.brake();
console.log(challenger);

class EV extends Car {
    // Private fields
    #charge;
    
    
    constructor(make,speed,charge) {
        super(make,speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    
    accelerate() {
        this.speed+=20;
        this.#charge-=.01;
        console.log(`tesla going ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }

}

const nevera = new EV('rimac',150,.80)
console.log(nevera);
nevera.accelerate().brake();
console.log(nevera.speedUS); // getter
nevera.speedUS = 106;
//console.log(nevera.#charge); error
console.log(nevera);

