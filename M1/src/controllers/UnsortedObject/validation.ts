const validation = {
  create: {
    keyCount: {
      require: true,
      positiveNumber: true,
      in: ['body'],
      Error: {
        error: 'KeyCount is required',
        message: 'KeyCount is required',
        timestamp: new Date(),
        status: 500
      },
      typeError: {
        error: 'KeyCount should be of type positive Number',
        message: 'KeyCount should be of type positive Number',
        timestamp: new Date(),
        status: 500
      }
    },
    depth: {
      require: true,
      number: true,
      in: ['body'],
      Error: {
        error: 'depth is required',
        message: 'depth is required',
        timestamp: new Date(),
        status: 500
      },
      typeError: {
        error: 'depth should be of type Number',
        message: 'depth should be of type Number',
        timestamp: new Date(),
        status: 500
      }
    }
  }
};

export default validation;
