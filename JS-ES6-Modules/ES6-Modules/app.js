//https://www.youtube.com/watch?v=cRHQNNcYf6s
import User, { printAge, printName } from "./User.js";

const user = new User("John", 85);

printName(user);

printAge(user);
// can also change the name of the import in this way
// import User, { printAge, printName as printUserName } from "./User.js";
// pruntUserName(user)
