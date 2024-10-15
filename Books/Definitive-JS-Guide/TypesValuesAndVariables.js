// console.log(0b10101) // ES6 bytes as number
// console.log(1_000_000_000) // underscores as seperators
// console.log(Infinity/Infinity) // NaN

// let x = .3 - .2 
// let y = .2 - .1
// console.log(x === y) // false
// console.log(x === .1) //false
// console.log(y === .1) // true 

// BigInt 
// console.log(1234n)
// console.log(0b111111n)
// console.log(0o7777n)
// console.log(0x80000000000000000n)

//console.log(BigInt(Number.MAX_SAFE_INTEGER)); // interesting
let string = "1" + "0".repeat(100);
//console.log(BigInt(string))

//console.log(1000n + 2000n)
//console.log(3000n - 2000n)
//console.log(2000n * 3000n)
//console.log(3000n / 977n)
//console.log(3000n % 977n)
//console.log((2n ** 131071n) - 1n)

// can't mixed BigInt with other types
// console.log(1 < 2n) // true
// console.log(2>1n) // true
// console.log(0==0n) // true
// console.log(0===0n) // false

// Date and Times
let timestamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();

console.log(typeof(timestamp)); //  number type - millisecond representation

// Strings - 16 bit values

let euro = "€";
let love = "❤️"; // two 16 bit values represents one js string value
console.log(`Euro length: ${euro.length}, Love length: ${love.length}`)

// literals

let singleLine = "this \
will \
print \
on the \
same line"

console.log(singleLine)


let s = "Hello World"
let e = "😊"
s.length 

// taking portions of a string
s.substring(1,4)
s.slice(-3)
s.split(", ") // ["Hello", "World"]

// searching a string
s.indexOf("l")
s.indexOf("l",3) // find the l after at or after the 3rd index 
console.log(s.indexOf('zz')) // if doesn't exist in string then return -1 which is helpful for boolean
console.log(s.indexOf('He')) // can search for multiple characters at once

// Boolean searching functions
s.startsWith("Hello") 
s.endsWith("!")
s.includes("you") 

// modifying a string
s.replace("llo","ya")
s.toLowerCase()
s.toUpperCase()
console.log(s.normalize()) // unicode NFC normalization?
console.log(s.normalize('NFD')) // normalize with different standard?

// Inspecting Individual (16-bit) characters  of string?
console.log(s.charAt(s.length-1)) // d
s.charAt(0)
console.log(s.charCodeAt(0)) // 16-bit number representing the character at index X
console.log(e.codePointAt(0)) // ES6 works for codepoints > 16-bits like

// Add space to beginning and end of string
console.log("x".padStart(3,'😊')) // add space from the start upto character such that the total length is 3 and fill space with smiley
console.log("x".padEnd(7,"ox")) // add and characters to the end

// trim
console.log("  test  ".trim())
console.log("  test  ".trimStart())
console.log("  test  ".trimEnd())

// other misc string methods and features
console.log(s.concat("!")) // can do this in multiple ways
console.log("<>".repeat (5)) // repeat the give string 5 times
console.log("string"[0]);

// Tagged Template Literals?
`\n`.length;
String.raw`\n`.length;

// Pattern Matching
let text = "testing: 1, 2, 3";
let pattern = /\d+/g; // match all instances of one or more digits?
console.log(pattern.test(text)); // true a match exists
console.log(text.search(pattern)); // position of first match
console.log(text.match(pattern)); // return array of all matches
console.log(text.replace(pattern,"#")); //replace matches with fill character(s)
console.log(text.split(/\D+/)) // split on nondigits? Not Understanding why space in first index.

// Boolean Values
// Below values resolve to false 
undefined 
0
null
NaN
""
-0 

if("value" !== null){ // has to be a specific falsy ie. null
    console.log("hello I ran");
}

// is more strict than

if (!"value") { // evals for any falsy
    console.log("hello");
}


// undefined and null 
console.log(null == undefined)
console.log(null === undefined)
console.log(typeof(null))
console.log(typeof(undefined))

// symbols 
let str = Symbol("sym_x")
console.log(str.toString('abc'))
console.log(str.toString('abc'));
let st = Symbol.for("shared");
let t = Symbol.for("shared")
console.log(t===st)
console.log(st.toString())
console.log(Symbol.keyFor(t))

// object comparisons

let o = {x:3}
let p = {x:3}

console.log(p===o) // false, not the same reference object

let arr1 = [0,1,2,3]
let arr2 = arr1 

console.log(arr1 === arr2); // true 

// creating array copy
let arr3 = Array.from(arr2)
console.log(arr3===arr2) // false, this is a copy


// TYPE CONVERSIONS
console.log("Type Conversions\n")
console.log(10 + " objects")
console.log("7" * "4")
//let n = 1 - "x";
//console.log(n+" objects")

console.log(true.toString())

// Flexible equality operator
console.log(null == undefined);
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);


// Explicit type conversion
console.log("\nExplicit type conversions\n" + String(true))
console.log(Boolean([]))
console.log(Number("3"));

console.log("\nThe weird stuff");
let x = "0";
let y = 4;
console.log(y + ""); // x to a string 
console.log(+x); // x to a number
console.log(!y) // y to a boolean and negate 
console.log(!!+x) // convert x to an number then number to boolean and double negate

// To String Method defined in the Number class
// let n = 17;
// let binary = "0b" + n.toString(2);
// let octal = "0o" + n.toString(8);
// let hex = "0x" + n.toString(16);

//
let n = 123456.789;
console.log(n.toFixed(0)); // fixed number of digits after the decimal, never in exponential notation
console.log(n.toExponential(1)); // fixed number of digits after the decimal w/ exp notation
console.log(n.toExponential(3)); 
console.log(n.toPrecision(4)); // converts number to a string, uses exp notation and zero padding as needed 
console.log(n.toPrecision(10));

// ParseInt & ParseFloat Global Functions
