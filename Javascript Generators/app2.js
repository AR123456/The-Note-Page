/*a generator is just a function that is used to iterate over a series of values.
syntax is the asterisk * next to the function keyword. This is simply there to tell JavaScript you are creating a generator function
*/

function* simpleGenerator() {
  /* yield keyword essentially constitutes a break in the generator. Whenever yield is encountered the generator will stop running and will return the value. You can almost think of the yield keyword as a mini return.  */
  console.log("Before 1");
  yield 1;
  console.log("Before 2");
  yield 2;
  console.log("End of Generator");
  yield 3;
}

/* When you call a generator function it doesn’t actually run any of the code in the generator and instead returns a generator object which can be used to run the code in the generator function. */

const generatorObject = simpleGenerator();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
