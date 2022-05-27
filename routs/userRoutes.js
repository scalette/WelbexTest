const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.route('/signup').post(authController.signup)
router.route('/login').post(authController.login)
router.use(authController.protect);
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);

module.exports = router;