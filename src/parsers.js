import yaml from 'js-yaml';

const jsonParse = (data) => JSON.parse(data);

const yamlParse = (data) => yaml.load(data);

export { jsonParse, yamlParse };
