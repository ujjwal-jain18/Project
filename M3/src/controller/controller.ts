import { Response, Request } from 'express';
import axios from 'axios';
import { performance } from 'perf_hooks';

class Controller {
  static instance: Controller;
  static getInstance = () => {
    if (Controller.instance) {
      return Controller.instance;
    }
    Controller.instance = new Controller();
    return Controller.instance;
  };
  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { keyCount, depth } = req.body;
      const result = await axios({
        method: 'post',
        url: 'http://localhost:9001/unsorted/create',
        data: {
          keyCount,
          depth
        }
      });
      return res.send(result.data);
    } catch (err) {
      return res.send(err);
    }
  };

  sort = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { _id, sortUsing } = req.query;
      let duration = 0.0;
      const fetch = await axios({
        method: 'get',
        url: 'http://localhost:9001/unsorted/get',
        params: {
          _id
        }
      });
      const { object } = fetch.data;
      if (object) {
        const start = performance.now();
        const sortedObject = await axios({
          method: 'get',
          url: 'http://localhost:9002/sort',
          params: {
            obj: object,
            sortUsing
          }
        });
        const end = performance.now();
        duration = end - start;
        const sortStats = await axios({
          method: 'post',
          url: 'http://localhost:9001/sorted/create',
          data: {
            sortDuration: duration,
            sortingAlgorithm: sortUsing,
            objectId: _id
          }
        });
        return res.send(sortStats.data);
      }
      return res.send({});
    } catch (err) {
      return res.send(err);
    }
  };

  view = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { objectId } = req.query;
      const result = await axios({
        method: 'get',
        url: 'http://localhost:9001/sorted/get',
        params: {
          objectId
        }
      });
      return res.send(result.data);
    } catch (err) {
      return res.send(err);
    }
  };

  list = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await axios({
        method: 'get',
        url: 'http://localhost:9001/unsorted/list'
      });
      return res.send(result.data);
    } catch (err) {
      return res.send(err);
    }
  };
}

export default Controller.getInstance();
