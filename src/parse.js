import fs from 'fs';
import path from 'path';
import process from 'process';

const parse = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const parsedData = JSON.parse(data);

  return parsedData;
};

export default parse;
