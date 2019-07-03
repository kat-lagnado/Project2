var express = require("express");
var path = require("path");
var router = express.Router();

// Import the model (outfit.js) to use its database functions.
var outfit = require("../models/outfits.js");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/upload.html"));
});

router.get("/page6.html", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/page6.html"));
});

router.get("/page7.html", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/page7.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/data", function(req, res) {
  
  outfit.all(function(data) {
    
    res.json({ outfit: data });
  });
});
router.post("/api/outfits",function(req,res){
  console.log(req.body)
  outfit.all(function(data) {
    console.log("sent")
    res.json({ outfit: data });
})
})
// router.post("/api/add", function(req, res) {
//   outfit.create([
//     "type", "occasion", "season", "color", "gender"
//   ], [
//     req.body.type, req.body.occasion, req.body.season, req.body.color, req.body.gender]
//   )
// });

router.post("/api/create", function(req, res) {
  outfit.create([
    "type", "color","season", "occasion", "gender", "url"
  ], [
    req.body.type, req.body.color, req.body.season, req.body.occasion, req.body.gender, req.body.url

  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.put("/api/outfits/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   outfit.update({
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