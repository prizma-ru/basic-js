import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  
  return str.length >0?str.match(/(.)(\1*)/gi).map(s=>s.length>1?s.length +s[0]:s).join(''):'';
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


