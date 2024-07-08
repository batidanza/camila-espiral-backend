const express = require("express");
const router = express.Router();
const photoController = require("../controllers/CollectionPhotoController");

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;



cloudinary.config({
    cloud_name: "dlmwxlrn8",
    api_key: "983474745932756",
    api_secret: "OPy646OEXVS-x8bO_XKq5PhG48c",
  });
  
  // Configurar almacenamiento de Cloudinary
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "Media",
      resource_type: "auto",
    },
  });

  const upload = multer({ storage: storage });

router.get("/photos", photoController.getAllPhoto)

router.get("/byCollection/:collectionId", photoController.getPhotoByCollection);

router.post("/upload", upload.array("Image"), photoController.uploadPhoto);

module.exports = router;
