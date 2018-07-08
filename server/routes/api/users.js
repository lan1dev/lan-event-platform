import express from 'express';
import { findOne, create } from '../../controllers/user';

const router = express.Router();

router.get('/:email', findOne);

router.post('/', create);

export default router;
