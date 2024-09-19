const router = require("express").Router();
const hostEarningService = require("../../services/host_earning");

router.post("/get-earning", hostEarningService.setEarning);
router.get("/test-api", hostEarningService.testAPI);

module.exports = router;
