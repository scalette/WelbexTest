const {sequelize, Notes, cross_id_user_notes} = require('../models');
const factory = require('./handlerFactory');


exports.getAllNotesByUser = factory.getAll(Notes);
exports.createNote = factory.createOne(Notes);
exports.deleteNote = factory.deleteOneById(Notes);
exports.updateNote = factory.updateOne(Notes);