// https://www.youtube.com/watch?v=cRHQNNcYf6s
let userCount = 0;
// can only have one default export but multiple others that are not the default
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    userCount++;
  }
}
export function printName(user) {
  console.log(`User has the name ${user.name}`);
}
export function printAge(user) {
  console.log(`${user.name} is ${user.age} years old`);
}

// here (or in line) define the exports
// At the bottom of the User.js file we added 3 lines to declare our exports. As you can see we have one default export and then two non-default exports which are called named exports. With ES6 modules you can have as many named exports as you want, but you can have at most one default export. Now defining your exports on their own line like this does work, but you can instead define your exports on the same line you define your functions/classes which in my opinion is much easier to read.
// export default User
// export {printName,printAge}
