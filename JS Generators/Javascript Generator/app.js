/*a generator is just a function that is used to iterate over a series of values.
syntax is the asterisk * next to the function keyword. This is simply there to tell JavaScript you are creating a generator function
*/

function* simpleGenerator() {
  /* yield keyword essentially constitutes a break in the generator. Whenever yield is encountered the generator will stop running and will return the value. You can almost think of the yield keyword as a mini return.  */
  yield 1;
  yield 2;
  yield 3;
}

/* When you call a generator function it doesn’t actually run any of the code in the generator and instead returns a generator object which can be used to run the code in the generator function. */

const generatorObject = simpleGenerator();
/* With a generator object we have the ability to run the code in the generator step by step from one yield to the next yield by using the next function */
console.log(generatorObject.next());
// { value: 1, done: false }
console.log(generatorObject.next());
// { value: 2, done: false }
console.log(generatorObject.next());
// { value: 3, done: false }
console.log(generatorObject.next());
// { value: undefined, done: true }
/* In the above example you can see we created a generator object and called next 4 different times. Each time we called next it returned an object that contained a value property which is the value passed to the next yield as well as a done boolean that determined if we were at the end of the generator. */
