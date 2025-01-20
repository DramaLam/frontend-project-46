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

test('gendiff json', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2)).toBe(getResultFile('result.txt'));
});

test('gendiff yaml', () => {
  expect(genDiff(yamlFilepath1, yamlFilepath2)).toBe(getResultFile('result.txt'));
});

test('gendiff json plain', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'plain')).toBe(getResultFile('resultPlain.txt'));
});

test('gendiff yaml plain', () => {
  expect(genDiff(yamlFilepath1, yamlFilepath2, 'plain')).toBe(getResultFile('resultPlain.txt'));
});

test('gendiff json json', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'plain')).toBe(getResultFile('resultPlain.txt'));
});

test('gendiff yaml json', () => {
  expect(genDiff(yamlFilepath1, yamlFilepath2, 'plain')).toBe(getResultFile('resultPlain.txt'));
});
