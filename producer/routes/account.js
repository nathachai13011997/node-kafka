const router = require("express").Router();
const accountController = require("../controllers/accountController");

router.post("/openAccountEvent", accountController.openAccount);

module.exports = router