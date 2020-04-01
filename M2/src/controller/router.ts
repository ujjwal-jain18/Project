import { Router } from 'express';
import Controller from './controller';

const router = Router();
router.get('/sort', Controller.sort);

export default router;