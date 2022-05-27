'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:  DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
    paranoid: true,
    // If you want to give a custom name to the deletedAt column
    // deletedAt: 'destroyTime'
  });
  return User;
};