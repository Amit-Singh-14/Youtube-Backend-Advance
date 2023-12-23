import multer from "multer";

// multer use to upload and save files in server to third party service
// here we are storing the file in public/temp folder

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
