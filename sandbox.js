// constructor functions
// class User {
//   constructor(username){
//     this.username = username;
//   }
// }
// JS classes under the hood are a prototype model
// this is the code that lives under the hood when we use class above.
// this is the old way of writing that does the same thing
function User(username, email) {
  this.username = username;
  this.email = email;
  // it is better to do this using prototype 
  this.login = function() {
    console.log(`${this.username} has logged in`);
  };
}

const userOne = new User("ryu", "ryu@thenetninja.co.uk");
const userTwo = new User("chun-li", "chun.li@thenetninja.co.uk");

console.log(userOne, userTwo);
userOne.login();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
