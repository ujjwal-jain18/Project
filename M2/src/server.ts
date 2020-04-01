import * as express from 'express';
import Iconfig from './config/Iconfig';
import * as bodyParser from 'body-parser';
import router from './controller/router';

class Server {
  app: express.Application;
  constructor(private config: Iconfig) {
    this.app = express();
  }
  bootstrap(): Server  {
    this.BodyParser();
    this.setupRoutes();
    return this;
  }
   BodyParser(): void {
   // parse application/x-www-form-urlencoded
   this.app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
   this.app.use(bodyParser.json());
  }

  setupRoutes(): any {
    this.app.use(router);
  }
  run(): Server {
      this.app.listen(this.config.port, (err: any) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log(`server is running on ${this.config.port}`);
      });
  return this;
    }
}
export default Server;
