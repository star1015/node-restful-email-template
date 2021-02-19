let express = require("express");
let router = express.Router();

let {
  email_template
} = require("../controllers");


/**
 * If API url contains '/email_template' then, dive into here.
 * 
 * ex: https://localhost:3006/api/email_template/create
 */
router.get("/get-all", email_template.list);
router.get("/get/:id", email_template.get);
router.post("/create", email_template.create);
router.post("/update", email_template.update);
router.delete("/delete/:id", email_template.delete);

module.exports = router;
