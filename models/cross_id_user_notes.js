'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cross_id_user_notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cross_id_user_notes.init({
    id_user: DataTypes.INTEGER,
    id_note: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cross_id_user_notes',
    paranoid: true,
  });
  return cross_id_user_notes;
};