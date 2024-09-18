const router = require("express").Router();
const userLocInstallmentService = require("../../services/userLocInstallment");
// const { validate } = require("../../middlewares/validator");
// const validationSchemas = require("../../middlewares/");


router.post(
  "/user-loc-installment",
  userLocInstallmentService.createUserLocInstallment
);


router.patch(
  "/user-loc-installment/:id",
  userLocInstallmentService.updateUserLocInstallment
);


router.get(
  "/user-loc-installment",
  userLocInstallmentService.getUserLocInstallments
);

router.delete(
  "/user-loc-installment/:id",
  userLocInstallmentService.deleteUserLocInstallment
);

const isAdmin = (req,res,next)=>{
  if(req.user.role === 0){
    next();
  }else{
    res.status(401).json({
      statusCode: 401,
      message: "Only admin has permission to this route.",
    });
  }
};
router.patch(
  "/user-loc-doc-approval/:id",isAdmin,
  userLocInstallmentService.approveLocDocs
);


router.get(
  "/user-loc-docs",isAdmin,
  userLocInstallmentService.userLocDocs
);


module.exports = router;
