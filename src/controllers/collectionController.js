
require('dotenv').config();
const db = require('../database/models');


const getCollection= async (req, res) => {
  try {
    const registeredCollection = await db.Collection.findAll();
    res.json(registeredCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obtaining Users' });
  }
};


const getCollectionById = async (req, res) => {
  try {
    const collectionId = req.params.collectionId;

    const collection = await db.Collection.findByPk(collectionId);

    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }

    res.json(collection); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
  

const createCollection = async (req, res) => {
  try {
    const newCollection = req.body;
    const collectionImageUpload = req.files;
    const firstImage = collectionImageUpload[0].filename;
    const cloudinaryImageUrl = `https://res.cloudinary.com/dlmwxlrn8/image/upload/${firstImage}`;


    const newCollectionEntry = await db.Collection.create({
      Name: newCollection.Name,
      Description: newCollection.Description,
      Date: newCollection.Date,
      Image: cloudinaryImageUrl,
    });

    res.json({ message: "Collection created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Error publishing the collection: ${error.message}` });
  }
};

const createMl = async (req, res) => {
  try {
    const newCollection = req.body;
    const collectionImageUpload = req.files;
    const firstImage = collectionImageUpload[0].filename;
    const cloudinaryImageUrl = `https://res.cloudinary.com/dlmwxlrn8/image/upload/${firstImage}`;


    const newCollectionEntry = await db.MercadoLibre.create({
      Description: newCollection.Description,
      Image: cloudinaryImageUrl,
    });

    res.json({ message: "Collection created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Error publishing the collection: ${error.message}` });
  }
};

const getMl= async (req, res) => {
  try {
    const registeredCollection = await db.MercadoLibre.findAll();
    res.json(registeredCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obtaining Users' });
  }
};



module.exports = {
  getCollection,
  getCollectionById ,
  createCollection,
  createMl,
  getMl
};

