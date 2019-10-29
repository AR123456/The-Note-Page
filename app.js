const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E; // eulesr number
val = Math.round(2.4); //rounding
val = Math.ceil(2.4); // roundup
val = Math.floor(2.8); // round down
val = Math.sqrt(64); // square root
val = Math.abs(-3); // absolute number
val = Math.pow(8, 2); // power of something
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // min
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); //max
val = Math.random(); // get a random number (decimle )

val = Math.floor(Math.random() * 20 + 1); // way to get random whole number between 1 and 20

console.log(val);
