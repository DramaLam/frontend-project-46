import parse from '../src/parse.js';
import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = (_.union(keys1, keys2)).sort();

  const result = [];
  result.push('{');

  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result.push(`  + ${key} = ${data2[key]}`);
    } else if (!Object.hasOwn(data2, key)) {
      result.push(`  - ${key} = ${data1[key]}`);
    } else if (data1[key] !== data2[key]) {
      result.push(`  - ${key} = ${data1[key]}`);
      result.push(`  + ${key} = ${data2[key]}`);
    } else {
      result.push(`    ${key} = ${data1[key]}`);
    }
  };

  result.push('}')

  return result.join('\n');
};

export default genDiff;
