import * as mongoose from 'mongoose';

class SortedObjectSchema extends mongoose.Schema {
  constructor(option) {
    const sortedObjectSchema = {
      id: String,
      objectId: String,
      sortDuration: Number,
      sortingAlgorithm: String
    };
    super(sortedObjectSchema, option);
  }
}

export default SortedObjectSchema;
