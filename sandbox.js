// user constructor
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function() {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this;
};

// admin - create admin user type
function Admin(username, email) {
  // the .call method calls the user constructor
  //argument one is the context of what the this keyword will be equal to inside the user construtor funcion(new Admin )
  //argument two and beyond are the acutal parameters that we need to take in
  User.call(this, username, email);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
  // delete the user
};

const userOne = new User("ryu", "ryu@thenetninja.co.uk");
const userTwo = new User("chun-li", "chun.li@thenetninja.co.uk");
const userThree = new Admin("shaun", "shaun@thenetninja.co.uk");

console.log(userThree);
// prototype chain , nested levels
