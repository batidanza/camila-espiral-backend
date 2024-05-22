const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collectionController");

router.get("/collection", collectionController.getCollection);

router.get("/collection/:collectionId", collectionController.getCollectionById);


module.exports = router;
