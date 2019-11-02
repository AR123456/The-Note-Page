// FUNCTION DECLARATIONS - program control

function greet(firstName = "John", lastName = "Doe") {
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return "Hello " + firstName + " " + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3) {
  return x * x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs - declare and run a thte same time

(function() {
  console.log("IIFE Ran..");
})();

(function(name) {
  console.log("Hello " + name);
})("Brad");

// PROPERTY METHODS - a function inside of an object

const todo = {
  add: function() {
    console.log("Add todo..");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();
