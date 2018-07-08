import express from 'express';
import api from './api/index';
import auth from './auth/index';
import authCheckMiddleware from '../middleware/auth-check';

const router = express.Router();

router.use('/api', authCheckMiddleware);
router.use('/api', api);
router.use('/auth', auth);

export default router;
