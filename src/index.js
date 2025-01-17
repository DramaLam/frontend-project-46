import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { jsonParse, yamlParse } from './parsers.js';

const par = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');

  return data;
};


const genDiff = (filepath1, filepath2) => {
  const data1 = par(filepath1);
  const data2 = par(filepath2);

  const fileType = path.extname(filepath1);

  let fileParsedData1 = '';
  let fileParsedData2 = '';

  if (fileType === 'json') {
    fileParsedData1 = jsonParse(data1);
    fileParsedData2 = jsonParse(data2);
  } else {
    fileParsedData1 = yamlParse(data1);
    fileParsedData2 = yamlParse(data2);
  }

  const keys1 = Object.keys(fileParsedData1);
  const keys2 = Object.keys(fileParsedData2);
  const keys = (_.union(keys1, keys2)).sort();

  const result = [];
  result.push('{');

  /* eslint-disable-next-line */
  keys.map( (key) => {
    if (!Object.hasOwn(fileParsedData1, key)) {
      result.push(`  + ${key} = ${fileParsedData2[key]}`);
    } else if (!Object.hasOwn(fileParsedData2, key)) {
      result.push(`  - ${key} = ${fileParsedData1[key]}`);
    } else if (fileParsedData1[key] !== fileParsedData2[key]) {
      result.push(`  - ${key} = ${fileParsedData1[key]}`);
      result.push(`  + ${key} = ${fileParsedData2[key]}`);
    } else {
      result.push(`    ${key} = ${fileParsedData1[key]}`);
    }
  });

  result.push('}');

  return result.join('\n');
};

export default genDiff;
