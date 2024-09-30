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

