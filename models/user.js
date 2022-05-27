


'use strict';

const bcrypt = require('bcryptjs');
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
    name: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    password: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 10], 
          msg: "Must be between 5 and 10 symbols"}
      }
    },
    passwordConfirm: {
      type:  DataTypes.STRING,
      validate: {
        customValidator(el) {
          if(el !== this.password){
            throw new Error("The passwordd must be equal");
          }
        },
      },
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

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 12);
    //delete the passwordConfirm field
    user.passwordConfirm = undefined;
  });
  return User;

  
};

