const router = require("express").Router();

router.use(require("../controllers/file-upload/index.js"));
router.use(require("../controllers/auth/index.js"));

module.exports = router;
