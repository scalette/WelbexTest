
const {sequelize, User} = require('../models');

exports.getAllUsers = async (req, res) => {
    // const users = await User.findAll();
    res.status(200).json({
        status:'success',
        result: 'getAllUsers',
        data: {
            usr: 123
        }
    })
}

exports.createUser = async (req, res, next) => {
    // console.log(req.body);
    // await User.sync()
    // const doc = await User.create(req.body);
    // await User.sync({ alter: true })
    const { firstName, email } = req.body;
    try{
        const user = await User.create({firstName, email})
        res.status(201).json({
            status: 'success',
            data: {
              user
            },
          });
    } catch(err) {
        console.log(err)
    }
    
  }

  