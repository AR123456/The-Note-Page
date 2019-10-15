// symbols- new primitive data type
// no 2 symbols can ever be equal to one another
// Symbols can be used as keys or property names in objecs
//

const symbolOne = Symbol("a generic name");
const symbolTwo = Symbol("a generic name");

console.log(symbolOne, typeof symbolOne);
console.log(symbolOne === symbolTwo);
// createing a ninja object, makes all of the keys unique even if they apper the same
const ninja = {};

ninja.age = 30;
ninja["belt"] = "orange";
ninja["belt"] = "black";

ninja[symbolOne] = "ryu";
ninja[symbolTwo] = "shaun";

console.log(ninja);
console.log(ninja[symbolOne], ninja[symbolTwo]);
