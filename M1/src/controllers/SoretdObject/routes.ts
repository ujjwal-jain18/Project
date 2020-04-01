import { Router } from 'express';
import SortedController from './controller';
import validationHandler from '../../libs/Routes/ValidationHandler';
import validation from './validation';


const SortedRouter = Router();
SortedRouter.post('/create', validationHandler(validation.create), SortedController.create);
SortedRouter.get('/get', SortedController.get);


export default SortedRouter;