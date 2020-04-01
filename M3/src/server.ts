import * as express from 'express';
import Iconfig from './config/Iconfig';
import notFoundRoutes from './libs/Routes/notFoundRoute';
import errorHandler from './libs/Routes/ErrorHandler';
import router from './controller/route';
import * as bodyParser from 'body-parser';
import * as cros from 'cors';

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
     this.app.use(cros());
    }
    setupRoutes(): any {
        this.app.use(router);
        this.app.use(errorHandler);
        this.app.use(notFoundRoutes);
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

