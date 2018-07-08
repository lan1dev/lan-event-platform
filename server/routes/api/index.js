import express from 'express';
import tickets from './tickets';
import users from './users';

const router = express.Router();
router.use('/users', users);
router.use('/tickets', tickets);

export default router;
