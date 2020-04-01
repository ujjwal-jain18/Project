import { Response, Request } from 'express';
import Sorting from './helper';

class Controller {
  static instance: Controller;
  static getInstance = () => {
    if (Controller.instance) {
      return Controller.instance;
    }
    Controller.instance = new Controller();
    return Controller.instance;
  };
  sort = async (req: Request, res: Response) => {
    try {
      const { obj, sortingAlgo } = req.query;
      const object = JSON.parse(obj);
      const sortedObject = Sorting(object, sortingAlgo);
      return res.send(sortedObject);
    } catch (err) {
      return res.send(err);
    }
  };
}

export default Controller.getInstance();
