import _ from 'lodash';

const stringify = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }

  if (_.isPlainObject(value)) {
    return '[complex value]';
  }

  return `${value}`;
};

const getPlain = (data) => {
  const makeLines = (currentData, parent = null) => {
    const lines = Object
      .entries(currentData)
      .filter(([, val]) => val.type !== 'unchanged')
      .map(([key, val]) => {
        const property = parent ? `${parent}.${key}` : `${key}`;
        switch (val.type) {
          case 'changed':
            return `Property '${property}' was updated. From ${stringify(val.oldValue)} to ${stringify(val.newValue)}`;
          case 'deleted':
            return `Property '${property}' was removed`;
          case 'added':
            return `Property '${property}' was added with value: ${stringify(val.value)}`;
          default:
            return makeLines(val, property);
        }
      })
      .join('\n');

    return lines;
  };

  return makeLines(data);
};

export default getPlain;
