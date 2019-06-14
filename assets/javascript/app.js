// global context of this
console.log(this); // window

function whatIsThis() {
  return this;
}

whatIsThis(); // window

function variablesInThis() {
  this.person = "Elie";
}

variablesInThis(); // the keyword this inside the function is the window

console.log(person); // Elie

////////////////strict mode
("use strict");

console.log(this); // window

function whatIsThis() {
  return this;
}

whatIsThis(); // undefined

("use strict");

function variablesInThis() {
  // since we are in strict mode this is undefined
  // so what happens if we add a property on undefined?
  // let's see what happens when we call the function...
  this.person = "Elie";
}

variablesInThis(); // TypeError, can't set person on undefined!

//////////////////// Implicit / object
// strict mode does NOT make a difference here

var person = {
  firstName: "Elie",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  }
};
person.sayHi(); // "Hi Elie"
person.determineContext(); // true

////nested objects
var person = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
};
person.sayHi(); // "Hi Colt"
person.determineContext(); // true
// but what is the value of the keyword this right now?
person.dog.sayHello(); // "Hello undefined"
person.dog.determineContext(); // false

/// explicit binding
var person = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
};
person.dog.sayHello.call(person); // "Hello Colt"
person.dog.determineContext.call(person); // true

// Using call worked!
// Notice that we do NOT invoke sayHello or determineContext

/////////////////// use case for call
var divsArray = [].slice.call(divs);
// you might also see this as Array.prototype.slice.call(divs)
// they do the same thing
divsArray.filter(function(val) {
  return val.innerText === "Hello";
});
