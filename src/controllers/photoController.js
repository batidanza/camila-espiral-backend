const db = require('../database/models');

const getAllPhoto = async (req, res) => {
    try {

      const allPhoto = await db.Photo.findAll();
  
      res.json(allPhoto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los medios" });
    }
  };

  const getPhotoByCollection = async (req, res) => {
    try {
      const collectionId = req.params.collectionId;
      const photo = await db.Photo.findAll({
        where: { CollectionID: collectionId },
      });
      res.json(photo);
    } catch (error) {
      console.error(
        `Error obtaining media photos for collection with ID ${req.params.photoId}:`,
        error
      );
      res.status(500).json({ error: "Error obtaining media for collection" });
    }
  };



  
module.exports = {
  getAllPhoto,
  getPhotoByCollection
};
