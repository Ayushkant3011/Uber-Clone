const dotenv = require('dotenv');
dotenv.config(); 
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDB = require('./Database/connect');
const userRoutes = require('./Routes/User.routes');
const captainRoutes = require('./Routes/Captain.routes');


connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);  // http://localhost:4000/user/register
app.use('/captains', captainRoutes);  // http://localhost:4000/captain/register

module.exports = app;