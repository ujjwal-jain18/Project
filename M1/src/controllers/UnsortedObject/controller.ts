import { Response, NextFunction } from 'express';
import { objectGenerator } from './helper';
import IRequest from '../../libs/Routes/IRequest';
import UnsortedRepository from '../../repositories/UnsortedObject/UnsortedRepositiory';
import { performance } from 'perf_hooks';

class UnsortedController {
  static instance: UnsortedController;
  static unsortedRepository: UnsortedRepository;
  unsortedRepository = new UnsortedRepository();

  static getInstance = () => {
    if (UnsortedController.instance) {
      return UnsortedController.instance;
    }
    UnsortedController.instance = new UnsortedController();
    return UnsortedController.instance;
  };

  create = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      // console.log('Inside Create Trainee ');
      const sizeof = require('object-sizeof');
      const { keyCount, depth } = req.body;
      if (!(keyCount <= depth)) {
        const start = performance.now();
        const object = objectGenerator(keyCount, depth);
        const end = performance.now();
        const generationTime = end - start;
        const size: number = sizeof(object);
        parseInt(keyCount, 10);
        parseInt(depth, 10);
        const data = { keyCount, depth, object, size, generationTime };
        const result = await this.unsortedRepository.create(data);
        return res.send(result);
      } else {
        return res.send({ message: 'depth must less than keyCount' });
      }
    } catch (err) {
      return res.send(err);
    }
  };
  get = async (req: IRequest, res: Response) => {
    try {
      const { _id } = req.query;
      const result = await this.unsortedRepository.get(_id);
      if (result) {
        return res.send(result);
      }
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  };

  list = async (req: IRequest, res: Response) => {
    try {
      const result = await this.unsortedRepository.list();
      if (result) {
       return res.send(result);
      }
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  };
}
export default UnsortedController.getInstance();
