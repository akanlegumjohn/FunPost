const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(`listening to port ${port}...`.yellow.bold);
