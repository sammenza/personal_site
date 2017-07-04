const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.resolve(__dirname + '/../dist/')));

console.log("dirname" + path.resolve(__dirname + '/../node_modules/'));

app.use('/scripts', express.static(path.resolve(__dirname + '/../node_modules/')));

app.listen(3000);