import { Router } from 'express';
import Controller from './controller';

const router = Router();
router.post('/create', Controller.create);
router.get('/sort', Controller.sort);
router.get('/view', Controller.view);
router.get('/list', Controller.list);

export default router;