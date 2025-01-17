install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run

gendiff-h:
	node bin/gendiff.js -h

gendiff:
	node bin/gendiff.js file1.json file2.json

test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
