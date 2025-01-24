import fs from 'fs';
import path from 'path';
import process from 'process';
import getParser from './getParser.js';
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

  const fileType1 = path.extname(filepath1);
  const fileType2 = path.extname(filepath2);

  const fileParsedData1 = getParser(data1, fileType1);
  const fileParsedData2 = getParser(data2, fileType2);

  console.log(`fileParsedData1`);
  console.log(fileParsedData1);
  console.log(`fileParsedData2`);
  console.log(fileParsedData2);

  const comparsion = compareData(fileParsedData1, fileParsedData2);

  return selectFormat(comparsion, style);
};

export default genDiff;
