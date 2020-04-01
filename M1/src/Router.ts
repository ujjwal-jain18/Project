import { Router } from 'express';
import { UnsortedObject, SortedObject } from './controllers/index';


const router = Router();
router.use('/unsorted', UnsortedObject);
router.use('/sorted', SortedObject);

export default router;
