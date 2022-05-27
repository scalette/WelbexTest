const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController');

router.route('/')
    .get(userController.getAllNotesByUser)
    .post(userController.createNote)
    .delete(userController.deleteNote)
    .patch(userController.updateNote);

module.exports = router;