install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run
gendiff:
	node bin/gendiff.js -h

g:
	node bin/gendiff.js file1.json file2.json

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
