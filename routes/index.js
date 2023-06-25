var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express app title", name: "Прыуэт!!!!!!!   ))))" });
});

module.exports = router;
