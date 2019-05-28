// * Create a constructor called "DigitalPal" which will create four properties and four methods...
var DigitalPal = function() {
  (this.hugry = false),
    (this.sleep = false),
    (this.bored = true),
    (this.age = 0);
  this.feed = function() {
    if (this.hungry === true) {
      console.log("Thay was yummy");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks! I'm full");
    }
  };
  this.sleep = function() {
    if (this.sleepy === true) {
      console.log("Zzzzzz");
      this.sleepy = false;
      this.bored = true;
      increaseAge();
    } else {
      console.log("No way! I'm not tired");
    }
  };
  this.play = function() {
    if (this.bored === true) {
      console.log("Yay! Lets Play!");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now. Later?");
    }
  };
  this.increaseAge = function() {
    age++;
    console.log(`Happy Birthday to me!  I am ${age} old!`);
  };
};

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function() {
  console.log("Woof! Woof");
};

dog.letOutside = function() {
  if (this.outside === false) {
    console.log("Yay ! I love the outdoors");
    this.outside = true;
    this.bark();
  } else {
    console.log("We're already outside though...");
  }
};

dog.letInside = function() {
  if (this.outside === true) {
    console.log("Do we have to ? Fine...");
    this.outside = false;
  } else {
    console.log("I'm alreadey inside....");
  }
};

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function() {
  console.log("Meow! Meow!");
};

cat.destroyFurniture = function() {
  if (this.houseQuality - 10 > 0) {
    this.houseQuality -= 10;
    console.log("MUAHAHAHAH Take that furniture!");
    this.bored = false;
    this.sleepy = true;
  } else {
    console.log("Nothing left to distroy");
  }
};

cat.buyNewFurniture = function() {
  this.houseQuality += 50;
  console.log("Are you sure about that?");
};
