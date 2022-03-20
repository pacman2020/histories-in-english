'use strict';


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stories extends Model {
    static associate(models) {
    }
  }
  Stories.init({
    title: DataTypes.STRING,
    story: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Stories',
  });
  return Stories;
};