const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: 'false'
        }
      },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'book',
          key: 'id',
          unique: 'false'
        }
      },
  },
  {
    sequelize,
    modelName: 'post',
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Post;