import { config } from "dotenv";
config({
  path: "./.env",
});

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// from cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// creating a util so that we can upload any file
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    //file has been uploaded successfully
    console.log("file is uploaded on cloudinary ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved tempory file as the uplaod operation got failed.
    console.log(error);
    return null;
  }
};

export { uploadOnCloudinary };
