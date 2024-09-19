const router = require("express").Router();

router.use(require("../controllers/file-upload/index.js"));
router.use(require("../controllers/auth/index.js"));

router.use(require("../controllers/host_earning/index.js"));
module.exports = router;
