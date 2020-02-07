// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("cats", cols, vals, function(res) {
      cb(res);
    });
  },
  // cat.update({sleepy:"false"}, "id =5",cb )
  // calling by giving it an object to change ({sleepy:"false"}),
  // the were  "id" =5
  // the callback  to be triggerd later cb
  update: function(objColVals, condition, cb) {
    // here cbjColVals is an object of the column and value pairs
    // orm.update("cats",{sleepy:"false"},"id = 5", anotherCb)
    // this gets passed to the orm in the config folder
    orm.update("cats", objColVals, condition, function(res) {
      cb(res); // this callback calls another callback - the one coming from cat.update in the controller
    });
  },
  delete: function(condition, cb) {
    orm.delete("cats", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
