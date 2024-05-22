// mainRoutes.js
const express = require("express");
const router = express.Router();
const collectionRoutes = require("./collectionRoutes");
const photoRoutes = require("./photoRoutes")

router.get("/", (req, res) => {
    res.send("Welcome to the root URL");
  });

router.use("/collection", collectionRoutes);
router.use("/photo", photoRoutes);

module.exports = router;