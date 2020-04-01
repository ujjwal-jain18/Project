import * as mongoose from 'mongoose';
import UnsortedObjectSchema from './UnsortedSchema';
import IUnsortedObjectModel from './IUnsortedObjectModel';

const toConvert = {
  transfers: (doc: any, ret: any) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret._v;
  }
};
export const unsortedObjectSchema = new UnsortedObjectSchema({
  collection: 'unsortedObject',
  toJSON: toConvert,
  toObject: toConvert
});
export const unsortedObjectModel: mongoose.Model<IUnsortedObjectModel> = mongoose.model<
  IUnsortedObjectModel
>('UnsortedObject', unsortedObjectSchema, 'unsortedObjects', true);
