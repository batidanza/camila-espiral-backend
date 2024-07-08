const db = require('../database/models');

const getArchivePhotos = async (req, res) => {
  try {
    const archivePhotos = await db.ArchivePhoto.findAll();
    res.json(archivePhotos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obtaining Archive Photos' });
  }
};

const getPhotoByArchive = async (req, res) => {
  try {
    const archiveId = req.params.archiveId;
    const photo = await db.ArchivePhoto.findAll({
      where: { ArchiveID: archiveId },
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


const getArchivePhotoById = async (req, res) => {
  try {
    const photoId = req.params.photoId;

    const archivePhoto = await db.ArchivePhoto.findByPk(photoId);

    if (!archivePhoto) {
      return res.status(404).json({ error: 'Archive Photo not found' });
    }

    res.json(archivePhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const createArchivePhoto = async (req, res) => {
  try {
    const archiveName = req.body.ArchiveName;
    const imageUrl = req.files[0].path;

    const newArchivePhotoEntry = await db.ArchivePhoto.create({
      Image: imageUrl,
      ArchiveName: archiveName,
    });

    res.json({ message: "Archive Photo created successfully", archivePhoto: newArchivePhotoEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Error creating the archive photo: ${error.message}` });
  }
};

module.exports = {
  getArchivePhotos,
  getArchivePhotoById,
  createArchivePhoto,
  getPhotoByArchive
};
