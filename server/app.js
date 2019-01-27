/* Server app logic */

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import logger from 'morgan';

// [SH] Bring in the data model
require('./config/db');

const apiRoutes = require('./routes/api');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

// Set the client folder to serve static resources
app.use(express.static(path.join(__dirname, '../dist')));

// Use the API routes when path starts with /api
app.use('/api', apiRoutes);

// Otherwise handover things to client-side (React dist)
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

module.exports = app;
