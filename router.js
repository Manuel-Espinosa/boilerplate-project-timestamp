const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/api/:date?', controllers.handleDateRequest);

module.exports = router;
