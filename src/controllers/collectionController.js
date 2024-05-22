
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


module.exports = {
  getCollection,
  getCollectionById 
};

