var express = require("express");
var path = require("path");
var router = express.Router();

// Import the model (outfit.js) to use its database functions.
var outfit = require("../models/outfit.js");



router.get("/", function(_req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
 });
 
 router.get("/page6.html", function(_req, res) {
  res.sendFile(path.join(__dirname, "../public/page6.html"));
 });
 
 router.get("/page7.html", function(_req, res) {
  res.sendFile(path.join(__dirname, "../public/page7.html"));
 });




// Create all our routes and set up logic within those routes where required.
router.get("/data", function(_req, res) {
  outfit.all(function(data) {
    res.json({outfit: data });
  });
});



router.get("/graburl", function(_req, res) {
  outfit.all2(function(data) {

  res.json({outfit: data});
  });
});


router.post("/api/create", function(req, res) {
  outfit.create([
    "type", "color","season", "occasion", "gender", "url"
  ], [
    req.body.type, req.body.color, req.body.season, req.body.occasion, req.body.gender, req.body.url

  ], function(result) {
    // Send back the ID of the new outfit
    res.json({ id: result.insertId });
  });
});

  
// Export routes for server.js to use.
module.exports = router;