import fs from 'fs';
import path from 'path';
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const jsonFilepath1 = getFixturePath('file1.json');
const jsonFilepath2 = getFixturePath('file2.json');

const yamlFilepath1 = getFixturePath('file1.yaml');
const yamlFilepath2 = getFixturePath('file2.yaml');

const getResultFile = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

test.each([
  [jsonFilepath1, jsonFilepath2, 'stylish', 'result.txt'],
  [yamlFilepath1, yamlFilepath2, 'stylish', 'result.txt'],
  [jsonFilepath1, jsonFilepath2, 'plain', 'resultPlain.txt'],
  [yamlFilepath1, yamlFilepath2, 'plain', 'resultPlain.txt'],
  [jsonFilepath1, jsonFilepath2, 'json', 'resultJson.txt'],
  [yamlFilepath1, yamlFilepath2, 'json', 'resultJson.txt'],
])('%s и %s с расширением %s', (file1, file2, format, expected) => {
  expect(genDiff(file1, file2, format)).toBe(getResultFile(expected));
});
