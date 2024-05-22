const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");


router.get("/photos", photoController.getAllPhoto)

router.get("/byCollection/:collectionId", photoController.getPhotoByCollection);

module.exports = router;
