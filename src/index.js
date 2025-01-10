import fs from 'fs';

const gendiff = (filepath1, filepath2) => {
  const data1 = fs.readFileSync(filepath1, 'utf-8');
  const data2 = fs.readFileSync(filepath2, 'utf-8');

  const parsedData1 = JSON.parse(data1);
  const parsedData2 = JSON.parse(data2);

  return {file1: parsedData1, file2: parsedData2};
};

export default { gendiff };
//gendiff('file1.json', 'file2.json');