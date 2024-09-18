const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();  // Get the current timestamp
    const newFileName = `${file.fieldname}-${timestamp}${ext}`;
    cb(null, newFileName );
  },
});

module.exports.upload = multer({ storage: storage, limits:{fileSize : 10 * 1024 * 1024} });

