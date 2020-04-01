import { Response, NextFunction } from 'express';
import IRequest from '../../libs/Routes/IRequest';
import SortedRepository from '../../repositories/SortedObject/SortedRepositiory';

class SortedController {
  static instance: SortedController;
  static sortedRepository: SortedRepository;
  sortedRepository = new SortedRepository();

  static getInstance = () => {
    if (SortedController.instance) {
      return SortedController.instance;
    }
    SortedController.instance = new SortedController();
    return SortedController.instance;
  };
  create = async (req: IRequest, res: Response) => {
    try {
      const data = req.body;
      const result = await this.sortedRepository.create(data);
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  };
  get = async (req: IRequest, res: Response) => {
    try {
      const { objectId } = req.query;
      const result = await this.sortedRepository.get(objectId);
      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  };
}
export default SortedController.getInstance();
