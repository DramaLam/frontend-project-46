import _ from 'lodash';

const compareData = (data1, data2) => {
  const data1keys = _.keys(data1);
  const data2keys = _.keys(data2);
  const keys = _.union(data1keys, data2keys);
  const sortedKeys = _.sortBy(keys);

  const distinctions = sortedKeys.reduce((acc, key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.has(data1, key) && _.has(data2, key)) {
      if (_.isObject(value1) && _.isObject(value2)) {
        return { ...acc, [key]: compareData(value1, value2) };
      }
      const type = _.isEqual(value1, value2) ? 'unchanged' : 'changed';
      return {
        ...acc,
        [key]: type === 'unchanged'
          ? { value: value1, type }
          : { oldValue: value1, newValue: value2, type },
      };
    }
     return {
      ...acc,
      [key]: {
        value: _.has(data1, key) ? value1 : value2,
          type: _.has(data1, key) ? 'deleted' : 'added',
      }
    }
  }, {});

  return distinctions;
};

export default compareData;
