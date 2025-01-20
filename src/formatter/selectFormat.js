import getStylish from './getStylish.js';

const selectFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    default:
      throw new Error('ERROR format');
  }
};

export default selectFormat;
