import fs from 'fs';
import path from 'path';
import process from 'process';

const gendiff = (filepath1, filepath2) => {
  const absolutePath1 = path.resolve(filepath1);
  const absolutePath2 = path.resolve(process.cwd(), filepath2);
  console.log(absolutePath1);
  console.log(absolutePath2);

  const data1 = fs.readFileSync(absolutePath1, 'utf-8');
  const data2 = fs.readFileSync(absolutePath2, 'utf-8');

  const parsedData1 = JSON.parse(data1);
  const parsedData2 = JSON.parse(data2);

  return {file1: parsedData1, file2: parsedData2};
};

export default gendiff;
//gendiff('file1.json', 'file2.json');