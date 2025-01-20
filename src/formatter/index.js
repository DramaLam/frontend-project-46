import getStylish from './getStylish.js';
import getPlain from './getPlain.js';

const selectFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    case 'plain':
      return getPlain(data);
    default:
      throw new Error('ERROR format');
  }
};

export default selectFormat;
