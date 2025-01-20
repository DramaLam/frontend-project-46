import fs from 'fs';
import path from 'path';
import process from 'process';
import { jsonParse, yamlParse } from './parsers.js';
import compareData from './compareData.js';
import selectFormat from './formatter/index.js';

const getParsed = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');

  return data;
};

const genDiff = (filepath1, filepath2, style = 'stylish') => {
  const data1 = getParsed(filepath1);
  const data2 = getParsed(filepath2);

  const fileType = path.extname(filepath1);

  const [fileParsedData1, fileParsedData2] = (fileType === 'json')
    ? [jsonParse(data1), jsonParse(data2)]
    : [yamlParse(data1), yamlParse(data2)];

  const comparsion = compareData(fileParsedData1, fileParsedData2);

  return selectFormat(comparsion, style);
};

export default genDiff;
