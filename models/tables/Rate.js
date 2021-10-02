const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Rate extends Model {}

Rate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          max: 5,
          min: 1
          },
    },
    reason: {
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
      book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'book',
          key: 'id',
          unique: false
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'rate',
    underscored: true,
  }
);

module.exports = Rate;