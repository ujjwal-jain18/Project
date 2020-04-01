import * as mongoose from 'mongoose';
import { sortedObjectModel } from './SortedModel';

class UnsortedRepo {
  private sortedModel = sortedObjectModel;

  generateId = () => {
    return mongoose.Types.ObjectId();
  };

  public create = async data => {
    data._id = this.generateId();
    return this.sortedModel.create(data);
  };

  public get = async (objectId: any) => {
    return this.sortedModel.find({ objectId });
  };
}

export default UnsortedRepo;
