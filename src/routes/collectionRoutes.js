const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const collectionController = require("../controllers/collectionController");

// Configurar Cloudinary
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

router.get("/collection", collectionController.getCollection);

router.get("/get-ml", collectionController.getMl);

router.get("/collection/:collectionId", collectionController.getCollectionById);

router.post("/create-collection", upload.array("Image"), collectionController.createCollection);

router.post("/create-ml", upload.array("Image"), collectionController.createMl);


module.exports = router;
