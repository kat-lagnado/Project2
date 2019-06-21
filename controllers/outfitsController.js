var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var outfit = require("../models/outfit.js");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/data", function(req, res) {
  outfit.all(function(data) {
    res.json({ outfits: data });
  });
});

router.post("/api/outfitadd", function(req, res) {
  outfit.create([
    "type", "occasion", "season", "color", "gender"
  ], [
    req.body.type, req.body.occasion, req.body.season, req.body.color, req.body.gender
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.delete("/api/outfits/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  outfit.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
