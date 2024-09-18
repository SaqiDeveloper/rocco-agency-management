const router = require("express").Router();
const authService = require("../../services/auth");
const { validate } = require("../../middlewares/validator");
const validationSchemas = require("../../middlewares/validationSchemas");


router.post(
  "/login",
  authService.login
);


module.exports = router;
