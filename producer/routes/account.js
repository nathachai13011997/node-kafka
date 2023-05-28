const router = require("express").Router();
const accountController = require("../controllers/accountController");

router.post("/openaccountevent", accountController.openAccount);
router.post("/depositfundevent", accountController.depositFund);
router.post("/withdrawfundevent", accountController.withdrawFund);
router.post("/closeaccountevent", accountController.closeAccount);

module.exports = router;
