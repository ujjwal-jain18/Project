import UnsortedRepository from '../repositories/UnsortedObject/UnsortedRepositiory';
import * as mongoose from 'mongoose';

const unsortedRepository = new UnsortedRepository();

function generateObjectId() {
  return String(mongoose.Types.ObjectId());
}

export default async () => {
  const sizeof = require('object-sizeof');

  const unsortedObject = {
    objectUn: {
      name: 'Ujjwal jain',
      address: {
        houseNo: {
          block: 'udjdu',
          street: 'xyzzzy'
        },
        city: 'dekisijaj',
        dist: 'dekhfi'
      },
      friend: {
        boy: {
          name: 'ujedd',
          mobileNumber: 997178010
        },
        girl: {
          name: 'priujj',
          mobileNumber: 9876098099
        }
      },
      mobileNumber: 9971780910,
      hobbies: ['hiking', 'chess', 'counter-strike']
    },
    keyCount: 5,
    depth: 3,
    size: 315,
    generationTime: 50
  };
  const objKey = await Object.keys(unsortedObject).length;
  console.log('keys of unsortedObject', objKey);
  console.log('size of unsortedObject', sizeof(unsortedObject));

  const count = await unsortedRepository.count();
  console.log('Count as unsortedObjects is', count);

  if (!count) {
    Object.assign(unsortedObject);
    const id = generateObjectId();
    return unsortedRepository.create(unsortedObject).then(res => {
      console.log('UnsortedObject seeded successfully', res);
    });
  }
  console.log('UnsortedObject already seeded');
};
