/*a generator is just a function that is used to iterate over a series of values.
syntax is the asterisk * next to the function keyword. This is simply there to tell JavaScript you are creating a generator function
*/

function* generateId() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment != null) {
      id = id + increment;
    } else {
      id++;
    }
  }
}

/* When you call a generator function it doesn’t actually run any of the code in the generator and instead returns a generator object which can be used to run the code in the generator function. */

const gen = generateId();
console.log(gen.next().value);
//1
/* pass a value to the generator to determine how far we increment the next id. */
console.log(gen.next(3).value);
//4
console.log(gen.next().value);
// 5
