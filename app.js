const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const compression = require('compression');
const userRouter = require('./routs/userRoutes');

const {sequelize} = require('./models')


async function main(){
     await sequelize.sync({alter: true});
}

main();
//test middleware
app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    next();
})

app.use(compression());
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());


app.use('/api/v1/users', userRouter);

module.exports = app;