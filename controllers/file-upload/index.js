const router = require("express").Router();
const path = require('path');
const userLocInstallmentService = require("../../services/userLocInstallment");
const {upload} = require('../../utils/helpers-functions.js');

router.post("/upload-file", upload.single('file'), async (req, res, next) => {
    try {
        console.log(req.file)
        const rootDirectory = process.cwd();
        const filePath = path.join(rootDirectory, 'uploads', req.file.originalname);
        res.send({filename : `uploads/${req.file.filename}`})
    } catch (e) {
        console.log("Error==>: ", e)
    }
});


router.post("/upload-installment-files", upload.array('files',10),userLocInstallmentService.saveInstallmentDocs);
router.post("/upload-single-installment-file", upload.single('file'),userLocInstallmentService.uploadInstallmentDoc);
router.patch("/update-single-installment-file/:id", upload.single('file'),userLocInstallmentService.updateInstallmentDoc);

module.exports = router;