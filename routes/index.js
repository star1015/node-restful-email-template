let express = require("express");
let router = express.Router();


let api = require(__dirname + "/../api/routes");


router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Framizone"
  });
});

/**
 * All the endpoints which have the prefix 'api' should go to api/routes/index.js.
 * 
 * ex: https://localhost:3006/api/email-template/create
 */
router.use("/api", api);

module.exports = router;