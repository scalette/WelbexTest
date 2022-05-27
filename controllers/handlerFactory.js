const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAll = (Model) => catchAsync(async (req, res) => {
    const heap  = await Model.findAll();
    res.status(200).json({
        status:'success',
        data: {
            heap
        }
    })
});

exports.createOne = (Model) => catchAsync(async (req, res) => {
    const entity = await Model.create(req.body);
    req.id = entity.id;
        res.status(201).json({
            status: 'success',
            data: {
                entity
            },
            });
});

exports.deleteOneById = (Model) => catchAsync(async (req, res, next) => {
    const {id} = req.body
    const entity = await Model.findByPk(parseInt(id));
    if (entity === null){
        return next(new AppError('No document found with that ID', 404));
    }
    await Model.destroy({
        where: {
          id
        }
      });
    res.status(204).json({
        status: 'success',
        data: null
        });
});

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const {id} = req.body;
    const doc = await Model.findByPk(id);
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    doc.set(req.body);
    doc.save();
    res.status(200).json({
      status: 'success',
      date: {
        data: doc,
      },
    });
  });