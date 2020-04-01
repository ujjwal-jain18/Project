import * as mongoose from 'mongoose';

class UnsortedObjectSchema extends mongoose.Schema {
  constructor(option) {
    const unsortedObjectSchema = {
      id: String,
      keyCount: Number,
      depth: Number,
      size: Number,
      generationTime: Number,
      object: Object
    };
    super(unsortedObjectSchema, option);
  }
}

export default UnsortedObjectSchema;
