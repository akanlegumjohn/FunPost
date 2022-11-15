const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.listen(port, () => console.log(`listening to port ${port}...`.yellow.bold));
