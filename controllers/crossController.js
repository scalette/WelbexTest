const {sequelize, Notes, cross_id_user_notes} = require('../models');
const factory = require('./handlerFactory');


exports.createCrossRec = factory.createOne(Notes);
// exports.getAllNotesByUser = factory.getAll(Notes);
// exports.deleteNote = factory.deleteOneById(Notes);
// exports.updateNote = factory.updateOne(Notes);