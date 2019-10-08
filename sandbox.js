function User(username, email) {
  this.username = username;
  this.email = email;
}
// many methods avalbile via prototype- JS proxies up onto the root level of the object
// store the method onthe prototype
// the class does this automaticaly  but becuae in this example we are not using class we need to do that
//store the methods on the prototype - one location , can use prototypical inheritnace

// adding methods to prototype with .  set it equal to a funcition and do stuff inside
User.prototype.login = function() {
  console.log(`${this.username} has logged in`);
  return this; // return this so we can methond chaing
};
// can add more that one
User.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this; // do this so we can method chain
};

const userOne = new User("ryu", "ryu@thenetninja.co.uk");
const userTwo = new User("chun-li", "chun.li@thenetninja.co.uk");

console.log(userOne);
// can chain them
userOne.login().logout();
