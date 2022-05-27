const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController');
const crossTableController = require('../controllers/crossController');

router.route('/')
    .get(notesController.getAllNotesByUser)
    .post(notesController.createNote)
    .delete(notesController.deleteNote)
    .patch(notesController.updateNote);

module.exports = router;