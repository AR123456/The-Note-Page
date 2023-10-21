/*a generator is just a function that is used to iterate over a series of values.
syntax is the asterisk * next to the function keyword. This is simply there to tell JavaScript you are creating a generator function
*/

function* generateId() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

/* When you call a generator function it doesn’t actually run any of the code in the generator and instead returns a generator object which can be used to run the code in the generator function. */

const gen = generateId();
console.log(gen.next());
// { value: 1, done: false }
console.log(gen.return(10));
// { value: 10, done: true }
console.log(gen.next());
// { value: undefined, done: true }
/* The return function will always return what ever you pass to it as the value and it will force every new call to the next function to return an undefined value and true value for done as if the generator finished. */
