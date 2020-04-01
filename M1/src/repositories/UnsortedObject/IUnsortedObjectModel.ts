import * as mongoose from 'mongoose';

interface IUnsortedModel extends mongoose.Document {
  id: string;
  keyCount: number;
  depth: number;
  size: number;
  generationTime: number;
  object: object;
}

export default IUnsortedModel;
