import yaml from 'js-yaml';
import path from 'path';

const jsonParse = (data) => JSON.parse(data);

const yamlParse = (data) => yaml.load(data);

const parsers = (data, filepath) => {
  const fileType = path.extname(filepath);

  const result = (fileType === 'json')
    ? jsonParse(data)
    : yamlParse(data);

  return result;
};

export default  parsers;
