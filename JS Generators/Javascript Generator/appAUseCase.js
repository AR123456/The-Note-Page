/*a generator is just a function that is used to iterate over a series of values.
syntax is the asterisk * next to the function keyword. This is simply there to tell JavaScript you are creating a generator function
*/

function* generateId() {
  /* yield keyword essentially constitutes a break in the generator. Whenever yield is encountered the generator will stop running and will return the value. You can almost think of the yield keyword as a mini return.  */
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

/* When you call a generator function it doesn’t actually run any of the code in the generator and instead returns a generator object which can be used to run the code in the generator function. */

const gen = generateId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
/* This generator is essentially an infinite loop that increments an id variable by one every time it is called and will yield the new id. */
