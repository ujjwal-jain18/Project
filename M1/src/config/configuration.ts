import { config } from 'dotenv';
import Iconfig from './Iconfig';
config();
const configuration: Iconfig = Object.freeze({
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    MongoUri: process.env.MONGO_URL,

});
export default configuration;