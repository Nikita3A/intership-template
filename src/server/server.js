const path = require('path');
//
const express = require('express');
const middleware = require('../config/middleware');
const routes = require('../config/router');

/**
 * @type {express}
 * @constant {express.Application}
 */
const app = express();

/**
 * @description serving static files
 */
app.use(express.static(path.join(__dirname, '../views/pages')));

/**
 * @description set the view engine to ejs
 */
app.set('view engine', 'ejs');

/**
 * @description express.Application Middleware
 */
middleware.init(app);

/**
 * @description express.Application Routes
 */
routes.init(app);

/**
 * @description sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

module.exports = app;
