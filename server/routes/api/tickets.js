import express from 'express';
import { read, create, remove, update } from '../../controllers/ticket';

const router = express.Router();

router.get('/', read);

router.post('/', create);

router.delete('/:id', remove);

router.put('/:id', update);

export default router;
