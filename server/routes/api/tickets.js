const express = require('express');
const ticketController = require('../../controllers/ticket');

const router = express.Router();

router.get('/', ticketController.read);

router.post('/', ticketController.create);

router.delete('/:id', ticketController.remove);

router.put('/:id', ticketController.update);

module.exports = router;
