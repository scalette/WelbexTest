
const {sequelize, User} = require('../models');
const factory = require('./handlerFactory');


exports.getAllUsers = factory.getAll(User);
exports.createUser = factory.createOne(User);
exports.deleteUser = factory.deleteOneById(User);
exports.updateUser = factory.updateOne(User);