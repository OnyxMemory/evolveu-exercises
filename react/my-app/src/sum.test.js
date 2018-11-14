 //const sum = require('./sum');

import aca from './sum';


test('adds 1 + 2 to equal 3', () => {
  console.log(aca)
  expect(aca.sum(1, 2)).toBe(3);
});

test('adds 1+2+4 to equal 7', () => {
	expect(aca.add(1,2)).toBe(7);
});
