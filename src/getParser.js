import yaml from 'js-yaml';

const jsonParse = (data) => JSON.parse(data);

const yamlParse = (data) => yaml.load(data);

const getParser = (data, fileType) => {
  switch (fileType) {
    case '.json':
      return jsonParse(data);
    case '.yaml':
      return yamlParse(data);
    default:
      throw new Error('Incorrect data format');
  }
};

export default getParser;
