function photoData(sequelize, DataTypes) {
    let photoTableName = 'Photo';
  
    let photoColumns = {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CollectionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    };
  
    let photoConfig = {
      timestamps: false,
      tableName: 'Photo',
    };
  
    const Photo = sequelize.define(photoTableName, photoColumns, photoConfig);
  
    Photo.associate = function(models) {
      Photo.belongsTo(models.Collection, {
        foreignKey: 'CollectionID',
        as: 'Collection'
      });
    };
  
    return Photo;
  }
  
  module.exports = photoData;
  