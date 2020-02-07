// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    // orm.all(tabelName,cb)
    orm.all("cats", function(res) {
      cb(res); // look at the controller for this
    });
  },
  // The variables cols and vals are arrays.
  //cat.create(["name", "sleepy"],["Hendrix", "1"], callback)
  create: function(cols, vals, cb) {
    // orm.create("cats",["name","sleepy"],["Hendrix","1"],anotherCb)
    orm.create("cats", cols, vals, function(res) {
      // this triggers call back from the controller and gives it the data(the post)
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
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
