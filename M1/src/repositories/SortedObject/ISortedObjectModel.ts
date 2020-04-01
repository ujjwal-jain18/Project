import * as mongoose from 'mongoose';

interface ISortedModel extends mongoose.Document {
  id: string;
  objectId: string;
  sortDuration: number;
  sortingAlgorithm: string;
}
export default ISortedModel;
