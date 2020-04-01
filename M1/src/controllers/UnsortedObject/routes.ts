import { Router } from 'express';
import UnsortedController from './controller';
import validationHandler from '../../libs/Routes/ValidationHandler';
import validation from './validation';


const UnsortedRouter = Router();
UnsortedRouter.post('/create', validationHandler(validation.create), UnsortedController.create);
UnsortedRouter.get('/get', UnsortedController.get);
UnsortedRouter.get('/list', UnsortedController.list);


export default UnsortedRouter;

