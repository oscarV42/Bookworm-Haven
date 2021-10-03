// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Book extends Model {}

// set up fields and rules for Product model
Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    publishedDate: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },   
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: 'false'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;