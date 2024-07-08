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
        `Error obtaining photo photos for collection with ID ${req.params.photoId}:`,
        error
      );
      res.status(500).json({ error: "Error obtaining photo for collection" });
    }
  };


  const uploadPhoto = async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res
          .status(400)
          .json({ error: "No se ha proporcionado ninguna imagen" });
      }
  
      const { CollectionID, Name  } = req.body;
      console.log("Request body:", req.body);

      console.log("Name:", Name)
  
      const uploadedFiles = req.files;
      const uploadedPhoto = uploadedFiles.map((file) => ({
        Image: file.path,
        CollectionID,
        Name,
      }));
  
      const createdPhoto = await db.Photo.bulkCreate(uploadedPhoto);
  
      res.json({ message: "Medios creados exitosamente", photo: createdPhoto });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al cargar los medios" });
    }
  };



  
module.exports = {
  getAllPhoto,
  getPhotoByCollection,
  uploadPhoto
};
