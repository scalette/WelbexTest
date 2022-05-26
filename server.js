const dotenv = require('dotenv')
const { Sequelize } = require('sequelize');

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT Exception, shutting down....');
    console.log('1.', err.name, '\n2.', err.message);
    process.exit(1);
});
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT;

//connecting to a database
// const sequelize = new Sequelize('postgres', process.env.DB_USERNAME, process.env.DP_PASS, {
//     host: process.env.DATABASE,
//     dialect: 'postgres'
//   });
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);}

const server = app.listen(port, () => {
    console.log(`app running on port: ${port}.`);
});

