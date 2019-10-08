class User {
  constructor(username, email) {
    //use the constructor to set up the properties
    this.username = username;
    this.email = email;
    this.score = 0;
  } //- inside a class dont comma separate different methods
  // this is a regular function using shorthand notation because arrow fundtions do not bind a value to the keyword "this" when they are called
  // if we used an arrow function here "this" inside the function itself it would refer to the window object
  // by using a regular function the "this" keywod will be the object instance, that is the object we create when we use new user
  login() {
    console.log(`${this.username} just logged in`);
    // if you do not expicitly return JS will return undefined
    return this; // this refers to the object instance itself- do this if you want to chain
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}
// class inheritance - sub classes > the inherit functionality from another class but have their own additional properties or methods too. then extend another class
// this Admin class is inheriting all of the properties and methods of User  pluss have the deleteUser method
class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => u.username !== user.username);
    return this; // allow method chaining
  }
}
// the new user objects created here have access to all fo the functions inside the class
const userOne = new User("luigi", "luigi@thenetninja.co.uk");
const userTwo = new User("mario", "mario@thenetninja.co.uk");
const userThree = new Admin("shaun", "shaun@thenetninja.co.uk");

console.log(userOne, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);
// the filter method above filters out the deleted user
userThree.deleteUser(userTwo);
console.log(users);

userOne
  .login()
  .incScore()
  .incScore()
  .logout();
