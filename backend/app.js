const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectToDb = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
// connectToDb();

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

app.listen(port, () => console.log(`listening to port ${port}...`.yellow.bold));
