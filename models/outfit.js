// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var outfit = {
  all: function(cb) {
    orm.all("outfit", function(res) {
      cb(res);
    });
  },

  all1: function(cb) {
    orm.all1("outfit", function(res) {
      cb(res);
    });
  },

  all2: function(cb) {
    orm.all2("outfit", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("outfit", cols, vals, function(res) {
      cb(res);
    });
  },

update: function(objColVals, condition, cb) {
    orm.update("outfit", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("outfit", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = outfit;
