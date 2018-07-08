const express = require('express');
const tickets = require('./tickets');
const users = require('./users');

const router = express.Router();
router.use('/users', users);
router.use('/tickets', tickets);

module.exports = router;
