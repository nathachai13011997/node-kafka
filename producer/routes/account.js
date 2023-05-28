const router = require("express").Router();
const accountController = require("../controllers/accountController");

router.post("/openAccountEvent", accountController.openAccount);
router.post("/depositFundEvent", accountController.depositFund);
router.post("/withdrawFundEvent", accountController.withdrawFund);
router.post("/closeAccountEvent", accountController.closeAccount);

module.exports = router;
