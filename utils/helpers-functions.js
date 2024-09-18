const multer = require('multer');
const path = require('path');

module.exports.generateRandomString = (length = 8) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    result += randomDigit.toString();
  }
  return result;
}


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

