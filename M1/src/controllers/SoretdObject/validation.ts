const validation = {
  create: {
    id: {
      required: true,
      string: true,
      in: ['body'],
      Error: {
        error: 'id is required',
        message: 'id is required',
        timestamp: new Date(),
        status: 500
      },
      typeError: {
        error: 'id should be of type String',
        message: 'id should be of type String',
        timestamp: new Date(),
        status: 500
      }
    }
  }
};
export default validation;
