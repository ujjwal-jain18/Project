import * as Mongoose from 'mongoose';
import SeedData from './SeedData';
class Database {
    static open = (mongoUri: string ) => {
        return new Promise(( resolve , reject) => {

            Mongoose.connect (mongoUri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
                if (err) {
                    console.log('err in Mongo DB connection');
                    return reject(err);
                }
                SeedData();
                return resolve('Connection Successful ');
            });
        });

    }
    static disconnect = (mongoUri: string) => {
        return new Promise(( resolve , reject) => {
            Mongoose.connection.close((err) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve('Disconnected Successfully');
                }
            });
        });
    }
}
export default Database;