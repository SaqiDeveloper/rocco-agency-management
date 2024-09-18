const router = require("express").Router();
const path = require('path');
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


const service = (req,res)=>{
res.status(200).json({message : "OK"})
}
router.post("/upload-installment-files", upload.array('files',10),service);
router.post("/upload-single-installment-file", upload.single('file'),service);
router.patch("/update-single-installment-file/:id", upload.single('file'),service);

module.exports = router;