const express = require('express');

const app = express();

const path = require('path');

const _dirname = '../dist';

app.use(express.static('dist'));

app.listen(3000);