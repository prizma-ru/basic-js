import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  var VRegExp = new RegExp(/^[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}/gi);
  return VRegExp.test(n);
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


/* console.log('00-1B-63-84-45-E6'.search(/[\da-z]{2}/gi));

var VRegExp = new RegExp(/^[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}-[\da-f]{2}/gi);

console.log(VRegExp.test('00-1B-63-84-45-E6'));
console.log(VRegExp.test('Z1-1B-63-84-45-E6'));
console.log(VRegExp.test('not a MAC-48 address'));
console.log(VRegExp.test('FF-FF-FF-FF-FF-FF'));
console.log(VRegExp.test('G0-00-00-00-00-00')); */

