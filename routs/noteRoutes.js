const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/')
    .get(notesController.getAllNotesByUser)
    .post(notesController.createNote)
    .delete(notesController.deleteNote)
    .patch(notesController.updateNote);

module.exports = router;