const router = require("express").Router();
const hostEarningService = require("../../services/host_earning");

router.post("/get-earning", hostEarningService.setEarning);

module.exports = router;
