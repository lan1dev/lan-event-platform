const express = require('express');
const tickets = require('./tickets');

const router = express.Router();
router.use('/users', users);
router.use('/tickets', tickets);

module.exports = router;
