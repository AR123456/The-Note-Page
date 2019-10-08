class User {
  //making the constructor function to construct the object and set the properties on it
  // this is the same shorthand syntax for a function that we used inside objects it must have the constructor in its name
  // must use constructor name
  constructor(username, email) {
    // using the same shorthand syntax that we used in objects

    // inside the constructor set up properties on the object.
    // have access to all the stuff riding on "this" that is coming from the const set to new User

    // this.username = 'mario';
    this.username = username;
    this.email = email;
  }
}
// this is calling the constructor funcion that is inside the class to set the properties on the new user object
// pass in paramiters here so that they can be used as argumetns in the constructor

const userOne = new User("luigi", "luigi@thenetninja.co.uk");
const userTwo = new User("mario", "mario@thenetninja.co.uk");

console.log(userOne, userTwo);

// the 'new' keyword - does three things
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object inside the class
// 3 - it calls the constructor function to 'build' the object inside the class
