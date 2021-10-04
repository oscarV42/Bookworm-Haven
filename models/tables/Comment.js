const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentDescription: {
      type: DataTypes.TEXT,
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
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id',
            unique: false,
        }
    },
  },
  {
    sequelize,
    modelName: 'comment',
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Comment;