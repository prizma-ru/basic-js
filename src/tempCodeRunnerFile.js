var VRegExp = new RegExp(/^[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}/gi);

console.log(VRegExp.test('00-1B-63-84-45-E6'));
console.log(VRegExp.test('Z1-1B-63-84-45-E6'));
console.log(VRegExp.test('not a MAC-48 address'));
console.log(VRegExp.test('FF-FF-FF-FF-FF-FF'));
console.log(VRegExp.test('G0-00-00-00-00-00'));