import * as mongoose from 'mongoose';
import SortedObjectSchema from './SortedSchema';
import ISortedObjectModel from './ISortedObjectModel';

const toConvert = {
  transfers: (doc: any, ret: any) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret._v;
  }
};
export const sortedObjectSchema = new SortedObjectSchema({
  collection: 'SortedObject',
  toJSON: toConvert,
  toObject: toConvert
});
export const sortedObjectModel: mongoose.Model<ISortedObjectModel> = mongoose.model<
  ISortedObjectModel
>('SortedObject', sortedObjectSchema, 'sortedObjects', true);
