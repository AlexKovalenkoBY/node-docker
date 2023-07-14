var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.sendFil("index", { title: "Express app title", name: "Прыуэт!!!!!!!   ))))" });
  res.sendFile('index.html', { root: __root+'mediplus' })
});

module.exports = router;
