const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
// res.status(statusCode).json({
//     status: 'success',
//     token,
//     data: {
//       user,
//     },
//   });


router.route('/').get(userController.getAllUsers).post(userController.createUser)
module.exports = router;