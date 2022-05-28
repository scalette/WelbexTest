
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const userRouter = require('./routs/userRoutes');
const noteRouter = require('./routs/noteRoutes');

const { sequelize } = require('./models')


async function main(){
     await sequelize.sync({alter: true});
}

app.enable('trust proxy');

app.set('view engine', 'pug');
//test middleware
app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.requestTime);
    next();
})

app.use(compression());
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/notes', noteRouter);
module.exports = app;